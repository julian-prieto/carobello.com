import Image from "next/image";
import slugify from "slugify";
import { ReadMoreLink } from "components";

export default function PortfolioItemPreview({ id, title, cover, description }) {
  return (
    <div className="relative group h-100vw w-100vw md:h-25vw md:w-1/4 bg-black">
      <div className="flex flex-col justify-between w-full h-full text-white">
        <span className="m-6 text-xl lg:m-12 md:text-xl xl:text-4xl leading-none">{title}</span>
        <ReadMoreLink
          href={`/portfolio?workId=${`${slugify(title, { lower: true })}-${id}`}`}
          as={`/portfolio/${`${slugify(title, { lower: true })}-${id}`}`}
          className="m-6 lg:m-12 hidden md:block"
          color="white"
          scroll={false}
          shallow
        >
          VER MÁS
        </ReadMoreLink>
        <ReadMoreLink href={`/portfolio/${`${slugify(title, { lower: true })}-${id}`}`} className="m-6 lg:m-12 md:hidden" color="white">
          VER MÁS
        </ReadMoreLink>
      </div>
      <div className="absolute top-0 left-0 w-full h-full group-hover:hidden">
        <div className="relative w-full h-full">
          <Image
            src={cover.url}
            alt={`${title} - ${description}`}
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
        </div>
      </div>
    </div>
  );
}
