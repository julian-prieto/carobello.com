import Link from "next/link";
import { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";
import { useCollection } from "@nandorojo/swr-firestore";
import { useAuth } from "hooks/useAuth";
import { GoogleLogin, Button } from "components";

export default function Upload() {
  const { user } = useAuth();
  const { data, loading, error, add } = useCollection("portfolio", {
    listen: true,
  });
  const [form, setForm] = useState({
    title: "",
    description: "",
    cover: "",
    uploadedImages: [],
  });

  useEffect(() => {
    console.log("data", data);
  }, [data]);

  const onDrop = useCallback((acceptedFiles) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;

    acceptedFiles.forEach(async (acceptedFile) => {
      const { signature, timestamp } = await getSignature();
      const formData = new FormData();

      formData.append("file", acceptedFile);
      formData.append("signature", signature);
      formData.append("timestamp", timestamp);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_KEY);

      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      setForm((prevState) => ({
        ...prevState,
        uploadedImages: [...prevState.uploadedImages, data.public_id],
      }));
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("form", form);
    add({
      title: form.title,
      description: form.description,
      cover: form.cover,
      images: form.uploadedImages.join(","),
    });
  };

  const isSubmitDisabled =
    !form.title || !form.description || !form.uploadedImages.length;

  if (!user) {
    return <GoogleLogin />;
  }
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
        <span>
          <Link href="/admin/portfolio">Portfolio</Link>
        </span>
        <span>&gt;</span>
        <span>Nuevo</span>
      </div>
      <div className="flex justify-end">
        <Button
          disabled={isSubmitDisabled}
          onClick={() => console.log("ONCLICK")}
        >
          PUBLICAR
        </Button>
      </div>
      <div className="mt-16 space-y-6 container">
        <div className="flex flex-1 justify-between space-x-16">
          <div className="flex-1 space-y-2">
            <label for="title" className="block text-md font-medium text-black">
              Título
            </label>
            <input
              onChange={(event) => handleChange(event)}
              value={form.title}
              type="text"
              name="title"
              className="w-full p-4 bg-gray-100"
              placeholder="Barbudito..."
            />
          </div>
        </div>

        <div className="flex-1 space-y-2">
          <label
            for="description"
            className="block text-md font-medium text-black"
          >
            Descripción
          </label>
          <div className="mt-1">
            <textarea
              onChange={(event) => handleChange(event)}
              value={form.description}
              name="description"
              rows="2"
              className="w-full p-4 bg-gray-100"
              placeholder="El barbudito tiene calor..."
            ></textarea>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:flex-row space-y-6 md:justify-between md:space-y-0 md:space-x-16">
          <div className="md:w-1/4">
            <label className="block text-md font-medium text-black">
              Portada
            </label>
            <div
              className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer ${
                isDragActive ? "bg-gray-200" : ""
              }`}
            >
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p className="text-xs text-black">
                  Seleccioná una imagen o arrastrá para subir.
                </p>
                <p className="text-xs text-black">Solo se admiten imágenes.</p>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-md font-medium text-black">
              Imágenes
            </label>
            <div
              {...getRootProps()}
              className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer ${
                isDragActive ? "bg-gray-200" : ""
              }`}
            >
              <input {...getInputProps()} />
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <p className="text-xs text-black">
                  Seleccioná uno o varios archivos o arrastrá para subir.
                </p>
                <p className="text-xs text-black">Solo se admiten imágenes.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap space-x-4">
          {form.uploadedImages.map((uploadedImage) => (
            <Image
              key={uploadedImage}
              cloudName="carobello"
              publicId={uploadedImage}
              width="150"
              crop="scale"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

async function getSignature() {
  const response = await fetch("/api/sign");
  const data = await response.json();
  const { signature, timestamp } = data;
  return { signature, timestamp };
}
