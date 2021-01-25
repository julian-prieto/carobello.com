import { useState } from "react";
import Link from "next/link";
import { useCollection } from "@nandorojo/swr-firestore";
import { fuego } from "pages/_app";
import { Modal } from "components";
import { useAuth } from "hooks/useAuth";

export default function AdminPortfolio() {
  const { user } = useAuth();

  const { data = [], loading, error } = useCollection("portfolio", {
    where: ["active", "==", true],
    listen: true,
  });
  const [deleteItem, setDeleteItem] = useState();

  const handleDelete = async (id) => {
    // const document = await fuego.db.doc(`portfolio/${id}`).get();
    // const nextDocument = { ...document.data() };
    // nextDocument.active = false;
    // await fuego.db.doc(`portfolio/${id}`).set(nextDocument);

    const item = await fuego.db.doc(`portfolio/${id}`).get();
    const { cover, images } = item.data();
    fuego.db
      .doc(`portfolio/${id}`)
      .delete()
      .then(async (info) => {
        console.log("info", info);
        await fetch("/api/image-delete", {
          method: "POST",
          headers: {
            Authorization: user.idToken,
          },
          body: JSON.stringify({
            images: [cover.id, ...images.map((image) => image.id)],
          }),
        });
      });
    setDeleteItem(undefined);
  };

  if (loading) {
    return "Loading...";
  }

  if (error) {
    return "ERROR";
  }

  return (
    <div className="flex flex-col container px-8 mt-8 md:px-16 md:mx-auto">
      <div className="space-x-2">
        <span>
          <Link href="/admin">Admin</Link>
        </span>
        <span>&gt;</span>
        <span>Portfolio</span>
      </div>
      <div className="flex justify-end">
        <Link href="/admin/portfolio/nuevo">
          <button className="focus:outline-none button p-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-normal text-xs">
            NUEVO
          </button>
        </Link>
      </div>
      <div className="mt-8">
        {data.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 first:border-b-0 border-2 border-black">
            <div>{item.title}</div>
            <div className="space-x-4">
              <Link href={`/admin/portfolio/editar/${item.id}`}>
                <button className="focus:outline-none button p-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-normal text-xs">
                  EDITAR
                </button>
              </Link>
              <button
                onClick={() => setDeleteItem(item.id)}
                className="focus:outline-none button p-2 bg-red-500 text-white border-2 border-red-500 hover:bg-white hover:text-red-500 font-normal text-xs first"
              >
                BORRAR
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        showModal={Boolean(deleteItem)}
        onClose={() => setDeleteItem(undefined)}
        onConfirm={() => handleDelete(deleteItem)}
        title="¿Deseas borrar este elemento?"
      />
    </div>
  );
}
