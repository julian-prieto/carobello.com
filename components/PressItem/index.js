import Image from "next/image";
import { generateImageSizes } from "utils";
import { ReadMoreLink } from "components";

export default function PressItem({ year, image, title, text, link }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4 mb-16 md:mb-2 ${year ? "mt-32" : ""}`}>
      <div className="relative w-full h-auto square">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          sizes={generateImageSizes({
            sm: "50vw",
            big: "33vw",
          })}
        />
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-10xl md:text-8xl font-bold">
          {year}
        </span>
      </div>
      <div className="flex flex-col justify-center items-start gap-4 md:col-span-3 px-8 py-4 md:py-8 md:px-8">
        <h2 className="text-xl md:text-4xl font-bold leading-1">{title}</h2>
        <p className="font-light">{text}</p>
        <div className="flex items-center px-2 py-1 bg-cb-green place-self-end md:place-self-start">
          <ReadMoreLink href={link} target="_blank" rel="noreferrer" color="black">
            VER MÁS
          </ReadMoreLink>
        </div>
      </div>
    </div>
  );
}
