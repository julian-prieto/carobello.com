import { useState, useEffect } from "react";
import Image from "next/image";
import { useDocument } from "@nandorojo/swr-firestore";

export default function PortfolioItemDetail({ workId, onClose: handleClose }) {
  const { data = {}, loading, error } = useDocument(`portfolio/${workId}`);

  const [currentImage, setCurrentImage] = useState(0);

  const { title = "", description = "", images = "" } = data;
  const imagesArray = images.length ? images.split(",") : [];
  console.log("imagesArray", imagesArray);
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

  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-black text-white flex z-50">
      <div className="relative flex flex-1 items-center overflow-hidden">
        <div className="absolute top-0 right-0 p-8 z-10">
          <button onClick={() => handleClose()}>X</button>
        </div>
        {imagesArray.length > 1 && (
          <div className="text-2xl text-white">
            <button onClick={previousImage}>&lt;</button>
          </div>
        )}
        <div className="flex flex-col justify-between flex-1 p-4 h-100vh">
          <div className="my-8">
            <span className="text-xl md:text-xl xl:text-4xl leading-none">
              {title}
            </span>
            <span className="text-xl ml-12 md:text-xl xl:text-2xl leading-none">
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
        {imagesArray.length > 1 && (
          <div className="text-2xl text-white">
            <button onClick={nextImage}>&gt;</button>
          </div>
        )}
      </div>
    </div>
  );
}
