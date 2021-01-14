import { useState, useEffect } from "react";
import Image from "next/image";
import { useDocument } from "@nandorojo/swr-firestore";

export default function PortfolioItemDetail({ workId, onClose: handleClose }) {
  const { data = {}, loading, error } = useDocument(`portfolio/${workId}`);

  const [currentImage, setCurrentImage] = useState(0);

  const { title = "", description = "", images = "" } = data;
  const imagesArray = images.length ? images.split(",") : [];

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "auto");
  }, []);

  const nextImage = () => {
    if (currentImage === imagesArray.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prevState) => prevState + 1);
    }
  };

  const previousImage = () => {
    if (currentImage === 0) {
      setCurrentImage(imagesArray.length - 1);
    } else {
      setCurrentImage((prevState) => prevState - 1);
    }
  };

  const canChangeImage = imagesArray.length > 1;

  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex z-50">
      <div className="relative flex flex-1 items-center overflow-hidden">
        <div className="absolute top-0 right-0 p-8 z-10">
          <button className="focus:outline-none" onClick={() => handleClose()}>
            <svg
              className="h-8 w-8"
              fill="white"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08 c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469 c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304 c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
            </svg>
          </button>
        </div>
        <button
          className={`m-8 focus:outline-none ${
            !canChangeImage ? "opacity-0 cursor-default" : ""
          }`}
          disabled={!canChangeImage}
          onClick={previousImage}
        >
          <svg
            className="h-8 w-8 transform rotate-180"
            fill="white"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
          </svg>
        </button>
        <div className="flex flex-col justify-between flex-1 p-4 h-100vh">
          <div className="my-8">
            <span className="text-xl md:text-xl xl:text-4xl leading-none">
              {title}
            </span>
            <span className="text-xl ml-12 md:text-xl xl:text-xl leading-none">
              {description}
            </span>
          </div>
          <div className="flex-1">
            {imagesArray?.map((imageUrl, index) => (
              <div
                key={imageUrl}
                className={`relative flex-1 h-full ${
                  index === currentImage ? "" : "hidden"
                }`}
              >
                <Image
                  src={imageUrl}
                  layout="fill"
                  objectFit="scale-down"
                  alt="Algo"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          className={`m-8 focus:outline-none ${
            !canChangeImage ? "opacity-0 cursor-default" : ""
          }`}
          disabled={!canChangeImage}
          onClick={nextImage}
        >
          <svg
            className="h-8 w-8"
            fill="white"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
