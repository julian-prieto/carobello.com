import Image from "next/image";
import { fuego } from "@nandorojo/swr-firestore";
import Slider from "react-slick";

export default function PortfolioItem({ data }) {
  const { title = "", cover = "", images = "", description = "" } = data;

  function SampleNextArrow(props) {
    console.log("props", props);
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="p-16">
      <Slider {...settings}>
        {!!images.length &&
          images.split(",").map((imageUrl, index) => {
            const colors = ["red", "green", "blue"];
            return (
              <div
                key={imageUrl}
                className={`relative flex-1 h-75vh bg-${colors[index]}-400`}
              >
                <Image
                  src={imageUrl}
                  layout="fill"
                  objectFit="scale-down"
                  alt="Algo"
                />
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const document = await fuego.db.doc(`portfolio/${id}`).get();
  const data = document.data();
  return {
    props: {
      data,
    },
  };
}
