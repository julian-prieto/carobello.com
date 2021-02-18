import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCollection } from "@nandorojo/swr-firestore";
import { Button } from "components";

export default function Upload() {
  const router = useRouter();

  const { add } = useCollection("testimonials");

  const [form, setForm] = useState({
    author: "",
    testimonial: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    const now = new Date();
    add({
      createdAt: now,
      updatedAt: now,
      author: form.author,
      testimonial: form.testimonial,
      active: true,
    }).then(() => {
      router.push("/admin/testimonios");
    });
  };

  const isSubmitDisabled = !form.author || !form.testimonial;

  return (
    <div className="flex flex-col container px-8 mt-8 md:px-16 md:mx-auto">
      <div className="space-x-2">
        <span>
          <Link href="/admin">Admin</Link>
        </span>
        <span>&gt;</span>
        <span>
          <Link href="/admin/testimonios">Testimonios</Link>
        </span>
        <span>&gt;</span>
        <span>Nuevo</span>
      </div>
      <div className="flex justify-end">
        <Button disabled={isSubmitDisabled} onClick={() => handleSubmit()}>
          PUBLICAR
        </Button>
      </div>
      <div className="mt-16 space-y-6 container">
        <div className="flex flex-1 justify-between space-x-16">
          <div className="flex-1 space-y-2">
            <label htmlFor="author" className="block text-md font-medium text-black">
              Autor
            </label>
            <input
              onChange={(event) => handleChange(event)}
              value={form.author}
              type="text"
              name="author"
              className="w-full p-4 bg-gray-100"
              placeholder="María Perez..."
            />
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <label htmlFor="testimonial" className="block text-md font-medium text-black">
            Testimonio
          </label>
          <div className="mt-1">
            <textarea
              onChange={(event) => handleChange(event)}
              value={form.testimonial}
              name="testimonial"
              rows="2"
              className="w-full p-4 bg-gray-100"
              placeholder="Bla bla bla..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
