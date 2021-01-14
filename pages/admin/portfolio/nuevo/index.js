import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";
import { fuego, useCollection } from "@nandorojo/swr-firestore";
import { useAuth } from "hooks/useAuth";
import { GoogleLogin, Button, Loader } from "components";

export default function Upload() {
  const router = useRouter();
  const { user } = useAuth();
  const { data, loading, error, add } = useCollection("portfolio", {
    listen: true,
  });
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [isUploadingImages, setIsUploadingImages] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    cover: "",
    uploadedImages: [],
  });

  const onDrop = useCallback((acceptedFiles) => {
    setIsUploadingImages(true);
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
        uploadedImages: [
          ...prevState.uploadedImages,
          { id: data.public_id, url: data.secure_url },
        ],
      }));
      setIsUploadingImages(false);
    });
  }, []);

  const onCoverDrop = useCallback((acceptedFiles) => {
    setIsUploadingCover(true);
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
        cover: { id: data.public_id, url: data.secure_url },
      }));
      setIsUploadingCover(false);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  const {
    getRootProps: getCoverRootProps,
    getInputProps: getCoverInputProps,
    isDragActive: isCoverDragActive,
  } = useDropzone({
    onDrop: onCoverDrop,
    accept: "image/*",
    multiple: false,
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
      title: form.title,
      description: form.description,
      cover: form.cover.url,
      images: form.uploadedImages.map((image) => image.url).join(","),
    }).then(() => {
      router.push("/admin/portfolio");
    });
  };

  const moveImageLeft = (index) => {
    const image = form.uploadedImages[index];
    const nextUploadedImages = [...form.uploadedImages];
    nextUploadedImages.splice(index, 1);
    nextUploadedImages.splice(index - 1, 0, image);
    setForm({
      ...form,
      uploadedImages: nextUploadedImages,
    });
  };

  const moveImageRight = (index) => {
    const image = form.uploadedImages[index];
    const nextUploadedImages = [...form.uploadedImages];
    nextUploadedImages.splice(index, 1);
    nextUploadedImages.splice(index + 1, 0, image);
    setForm({
      ...form,
      uploadedImages: nextUploadedImages,
    });
  };

  const removeImage = (index) => {
    const nextUploadedImages = [...form.uploadedImages];
    nextUploadedImages.splice(index, 1);
    setForm({
      ...form,
      uploadedImages: nextUploadedImages,
    });
  };

  const removeCover = () => {
    const { cover, ...restForm } = form;
    setForm(restForm);
  };

  const isSubmitDisabled = !form.title || !form.uploadedImages.length;

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
        <Button disabled={isSubmitDisabled} onClick={() => handleSubmit()}>
          PUBLICAR
        </Button>
      </div>
      <div className="mt-16 space-y-6 container">
        <div className="flex flex-1 justify-between space-x-16">
          <div className="flex-1 space-y-2">
            <label
              htmlFor="title"
              className="block text-md font-medium text-black"
            >
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
            htmlFor="description"
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
          <div className="md:w-1/4 flex flex-col">
            <label className="block text-md font-medium text-black">
              Portada
            </label>
            {form.cover ? (
              <div className="relative flex flex-1">
                <Image
                  cloudName="carobello"
                  publicId={form.cover.id}
                  width="600"
                  crop="scale"
                />
                <button
                  onClick={() => removeCover()}
                  className="absolute top-0 right-0 transform bg-red-500 p-2"
                >
                  <svg
                    className="h-4 w-4"
                    fill="white"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08 c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469 c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304 c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
                  </svg>
                </button>
              </div>
            ) : (
              <div
                {...getCoverRootProps()}
                className={`mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer ${
                  isCoverDragActive ? "bg-gray-200" : ""
                }`}
              >
                <input {...getCoverInputProps()} />
                {isUploadingCover ? (
                  <Loader />
                ) : (
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
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                    <p className="text-xs text-black">
                      Seleccioná un archivo o arrastrá para subir.
                    </p>
                    <p className="text-xs text-black">
                      Solo se admite una imágen.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-1 flex-col">
            <label className="block text-md font-medium text-black">
              Imágenes
            </label>
            <div
              {...getRootProps()}
              className={`mt-2 flex flex-1 justify-center items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md cursor-pointer ${
                isDragActive ? "bg-gray-200" : ""
              }`}
            >
              <input {...getInputProps()} />
              {isUploadingImages ? (
                <Loader />
              ) : (
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <p className="text-xs text-black">
                    Seleccioná uno o varios archivos o arrastrá para subir.
                  </p>
                  <p className="text-xs text-black">
                    Solo se admiten imágenes.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-wrap space-x-4">
          {form.uploadedImages.map((uploadedImage, index) => (
            <div key={uploadedImage.id} className="relative flex">
              <Image
                key={uploadedImage.id}
                cloudName="carobello"
                publicId={uploadedImage.id}
                crop="scale"
                width="200"
              />
              <button
                disabled={index === 0}
                onClick={() => moveImageLeft(index)}
                className={`absolute top-1/2 left-0 transform -translate-y-1/2 rotate-180 bg-black p-2 ${
                  index === 0 ? "opacity-0 cursor-default" : "opacity-80"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  fill="white"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
                </svg>
              </button>
              <button
                disabled={index === form.uploadedImages.length - 1}
                onClick={() => moveImageRight(index)}
                className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-black p-2 ${
                  index === form.uploadedImages.length - 1
                    ? "opacity-0 cursor-default"
                    : "opacity-80"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  fill="white"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
                </svg>
              </button>
              <button
                onClick={() => removeImage(index)}
                className="absolute top-0 right-0 transform bg-red-500 p-2"
              >
                <svg
                  className="h-4 w-4"
                  fill="white"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08 c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469 c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304 c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
                </svg>
              </button>
            </div>
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
