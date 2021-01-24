import { useRouter } from "next/router";
import { fuego } from "pages/_app";
import { PortfolioItemPreview, PortfolioItemDetail } from "components";

export default function Portfolio({ collection }) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-wrap">
        {collection.map((item) => (
          <PortfolioItemPreview key={item.id} {...item} />
        ))}
      </div>
      {!!router.query.workId && (
        <PortfolioItemDetail workId={router.query.workId} onClose={() => router.replace("/portfolio", { shallow: true })} />
      )}
    </>
  );
}

export async function getStaticProps() {
  const data = await fuego.db.collection("portfolio").orderBy("createdAt", "desc").get();
  const collection = data.docs.map((doc) => {
    const { title, description, cover, images } = doc.data();
    return { id: doc.id, title, description, cover, images };
  });
  return {
    props: {
      collection,
    },
    revalidate: 1,
  };
}
