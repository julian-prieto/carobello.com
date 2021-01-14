import { useRouter } from "next/router";
import { fuego } from "pages/_app";
import { PortfolioItemPreview, PortfolioItemDetail } from "components";

export default function Portfolio({ collection }) {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-wrap bg-red-500">
        {collection.map((item) => (
          <PortfolioItemPreview key={item.id} {...item} />
        ))}
      </div>
      {!!router.query.workId && (
        <PortfolioItemDetail
          workId={router.query.workId}
          onClose={() => router.replace("/portfolio")}
        />
      )}
    </>
  );
}

export async function getServerSideProps() {
  const data = await fuego.db.collection("portfolio").get();
  const collection = data.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return {
    props: {
      collection,
    },
  };
}
