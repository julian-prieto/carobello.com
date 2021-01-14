import { fuego } from "pages/_app";

export default function PortfolioItem({ data }) {
  return (
    <div className="p-16">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const document = await fuego.db.doc(`portfolio/${id}`).get();
  const { title, description, cover, images } = document.data();
  return {
    props: {
      data: { id: document.id, title, description, cover, images },
    },
  };
}
