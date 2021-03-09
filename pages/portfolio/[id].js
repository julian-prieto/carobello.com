import { useState, useEffect, useRef } from "react";
import { Image } from "cloudinary-react";
import slugify from "slugify";
import { fuego } from "pages/_app";
import debounce from "lib/debounce";

export default function PortfolioItem({ data }) {
  const imagesContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const { title, description, cover, images } = data;

  const handleResize = debounce(() => {
    if (imagesContainerRef.current.offsetWidth > containerWidth) {
      setContainerWidth(imagesContainerRef.current.offsetWidth);
    }
  }, 1000);

  useEffect(() => {
    if (imagesContainerRef.current) {
      setContainerWidth(imagesContainerRef.current.offsetWidth);
    }
  }, [imagesContainerRef]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [imagesContainerRef, containerWidth]);

  return (
    <section className="container py-20 mx-auto">
      <div ref={imagesContainerRef} className="flex flex-col space-y-16">
        {!!containerWidth &&
          images?.map((image) => (
            <a href={image.url} target="_blank">
              <Image key={image.id} cloudName="carobello" publicId={image.id} crop="scale" width={containerWidth} />
            </a>
          ))}
      </div>
    </section>
  );
}

export async function getStaticPaths() { // TODO: fix bug
  const data = await fuego.db.collection("portfolio").get();
  const paths = data.docs.map((doc) => {
    const { title } = doc.data();
    return { params: { id: `${slugify(title, { lower: true })}-${doc.id}` } };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const idArray = id.split("-");
  const portfolioId = idArray[idArray.length - 1];
  const document = await fuego.db.doc(`portfolio/${portfolioId}`).get();
  const { title, description, cover, images } = document.data();

  return {
    props: {
      data: { id: document.id, title, description, cover, images },
    },
    revalidate: 1,
  };
}
