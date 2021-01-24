import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDocument } from "@nandorojo/swr-firestore";
import { Loader } from "components";

export default function PortfolioItemDetail({ workId, onClose: handleClose }) {
  const idArray = workId.split("-");
  const portfolioId = idArray[idArray.length - 1];
  const { data = {}, loading, error } = useDocument(`portfolio/${portfolioId}`);

  const [currentImage, setCurrentImage] = useState(0);

  const { title = "", description = "", images = [] } = data;

  const canChangeImage = images.length > 1;

  const nextImage = () => {
    if (!canChangeImage) {
      return;
    }
    if (currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage((prevState) => prevState + 1);
    }
  };

  const previousImage = () => {
    if (!canChangeImage) {
      return;
    }
    if (currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage((prevState) => prevState - 1);
    }
  };

  const handleKeyDown = (event) => {
    const { key } = event;

    switch (key) {
      case "ArrowLeft":
        previousImage();
        break;
      case "ArrowRight":
        nextImage();
        break;
      case "Escape":
        handleClose();
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [canChangeImage, currentImage]);

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black text-white flex z-50">
      <div className="relative flex flex-1 items-center overflow-hidden">
        <div className="absolute top-0 right-0 p-8 z-10">
          <Link href={`/portfolio`} scroll={false} shallow>
            <svg className="h-8 w-8 cursor-pointer" fill="white" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08 c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469 c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304 c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
            </svg>
          </Link>
        </div>
        <button
          className={`m-8 focus:outline-none ${!canChangeImage ? "opacity-0 cursor-default" : ""}`}
          disabled={!canChangeImage}
          onClick={previousImage}
        >
          <svg className="h-8 w-8 transform rotate-180" fill="white" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
          </svg>
        </button>
        <div className="flex flex-col justify-between flex-1 p-4 h-100vh">
          <div className="my-8">
            <span className="text-xl md:text-xl xl:text-4xl leading-none">{title}</span>
            <span className="text-xl ml-12 md:text-xl xl:text-xl leading-none">{description}</span>
          </div>
          <div className="flex-1">
            {images?.map((image, index) => (
              <div
                key={image.id}
                className={`relative flex flex-1 h-full justify-center items-center ${index === currentImage ? "" : "hidden"}`}
              >
                <Loader color="white" />
                <a href={image.url} target="_blank">
                  <Image src={image.url} layout="fill" objectFit="scale-down" alt="Algo" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <button
          className={`m-8 focus:outline-none ${!canChangeImage ? "opacity-0 cursor-default" : ""}`}
          disabled={!canChangeImage}
          onClick={nextImage}
        >
          <svg className="h-8 w-8" fill="white" viewBox="0 0 20 20" aria-hidden="true">
            <path d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
