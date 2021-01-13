import { fuego } from "@nandorojo/swr-firestore";

export default function PortfolioItem({ data }) {
  return (
    <div className="p-16">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const document = await fuego.db.doc(`portfolio/${id}`).get();
  const data = document.data();
  return {
    props: {
      data,
    },
  };
}
