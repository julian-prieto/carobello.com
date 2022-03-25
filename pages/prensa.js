import { PressItem } from "components";

const PRESS_ITEMS = {
  2022: [
    {
      image: "/images/hola_yo.jpg",
      title: "The proper blog",
      text: "Algunos de mis muñecos y almohadones bordados estuvieron exhibidos en “Brotherhood”, el dormitorio para chicos diseñado por Coty Larguía en Casa FOA 2019.",
      link: "https://www.google.com",
    },
    {
      image: "/images/hola_yo.jpg",
      title: "The proper blog",
      text: "Algunos de mis muñecos y almohadones bordados estuvieron exhibidos en “Brotherhood”, el dormitorio para chicos diseñado por Coty Larguía en Casa FOA 2019.",
      link: "https://www.google.com",
    },
    {
      image: "/images/hola_yo.jpg",
      title: "The proper blog",
      text: "Algunos de mis muñecos y almohadones bordados estuvieron exhibidos en “Brotherhood”, el dormitorio para chicos diseñado por Coty Larguía en Casa FOA 2019.",
      link: "https://www.google.com",
    },
  ],
  2019: [
    {
      image: "/images/hola_yo.jpg",
      title: "The proper blog",
      text: "Algunos de mis muñecos y almohadones bordados estuvieron exhibidos en “Brotherhood”, el dormitorio para chicos diseñado por Coty Larguía en Casa FOA 2019.",
      link: "https://www.google.com",
    },
  ],
};

export default function Hola() {
  return (
    <section className="grid container py-20 mx-auto md:px-4 lg:px-16 xl:px-64">
      <h1 className="place-self-center text-4xl tracking-widest font-medium">PRENSA</h1>
      {Object.entries(PRESS_ITEMS)
        .reverse()
        .map(([year, items]) =>
          items.map((item, index) => (
            <PressItem
              year={index === 0 && year}
              image={item.image}
              title={item.title}
              text={item.text}
              link={item.link}
            />
          ))
        )}
    </section>
  );
}
