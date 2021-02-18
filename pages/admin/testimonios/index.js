import { useState } from "react";
import Link from "next/link";
import { useCollection } from "@nandorojo/swr-firestore";
import { fuego } from "pages/_app";
import { Modal } from "components";

export default function AdminTestimonios() {
  const { data = [], loading, error } = useCollection("testimonials", {
    where: ["active", "==", true],
    orderBy: ["createdAt", "desc"],
    listen: true,
  });

  const [deleteItem, setDeleteItem] = useState();

  const handleDelete = async (id) => {
    fuego.db
      .doc(`testimonials/${id}`)
      .delete()
      .then(() => {
        setDeleteItem(undefined);
      });
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
        <span>Testimonios</span>
      </div>
      <div className="flex justify-end">
        <Link href="/admin/testimonios/nuevo">
          <button className="focus:outline-none button p-4 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-normal text-xs">
            NUEVO
          </button>
        </Link>
      </div>
      <div className="mt-8">
        {data.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border-2 border-t-0 first:border-t-2 border-black">
            <div className="space-y-2 flex-1">
              <div className="flex justify-between items-center">
                <span className="font-bold">{item.author}</span>
                <div className="space-x-4">
                  <Link href={`/admin/testimonios/editar/${item.id}`}>
                    <button className="focus:outline-none button p-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black font-normal text-xs">
                      EDITAR
                    </button>
                  </Link>
                  <button
                    onClick={() => setDeleteItem(item.id)}
                    className="focus:outline-none button p-2 bg-red-500 text-white border-2 border-red-500 hover:bg-white hover:text-red-500 font-normal text-xs"
                  >
                    BORRAR
                  </button>
                </div>
              </div>
              <div>
                <span>{item.testimonial}</span>
              </div>
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
