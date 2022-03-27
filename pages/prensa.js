import Head from "next/head";
import { PressItem } from "components";

const PRESS_ITEMS = {
  2021: [
    {
      image: "/images/prensa/Club_de_Bordado.jpg",
      title: "Club de Bordado Argentina",
      text: "Fui convocada para bordar la portada de la edición Nº7 de la revista digital Club de Bordado Argentina.",
      link: "https://www.instagram.com/p/CPG2oADgQeZ/",
    },
    {
      image: "/images/prensa/Koel.jpg",
      title: "Koel Magazine",
      text: 'Mi trabajo destacado en la sección "Koel Stuff" especial Punch Needle.',
      link: "https://koel-magazine.com/collections/koel-magazine/products/new-issue-11",
    },
    {
      image: "/images/prensa/Diarios_Domestika.jpg",
      title: "Doméstika Diaries",
      text: 'Invitada para participar de la sección "Doméstika Diaries" mostando mi espacio de trabajo.',
      link: "https://www.domestika.org/es/blog/6537-diarios-domestika-caro-bello",
    },
  ],
  2020: [
    {
      image: "/images/prensa/Crafty_Tuesdays.jpg",
      title: "Doméstika Crafty Tuesdays",
      text: 'Invitada para enseñar punch needle en vivo durante la emisión de "Crafty Tuesdays" de Doméstika.',
      link: "https://www.youtube.com/watch?v=UEjZ3eJ4dlc",
    },
    {
      image: "/images/prensa/Punch_Needle_World.jpg",
      title: "Punch Needle World",
      text: 'Invitada para la sección "Meet the makers" del blog de punch needle "Punch Needle World".',
      link: "https://www.punchneedle.world/meet-the-maker/caro-bello",
    },
    {
      image: "/images/prensa/Historias_de_casa.jpg",
      title: "Histórias de casa",
      text: 'La casa de la galerista Fernanda Resstom decorada con mis almohadones, seleccionada para nota en el blog "Histórias de casa".',
      link: "https://www.historiasdecasa.com.br/2020/03/09/um-pouco-de-cada-um-casa-antiga-1/",
    },
    {
      image: "/images/prensa/5_artistas.jpg",
      title: "Blog Doméstika Marzo",
      text: 'Seleccionada para la nota "5 artistas de punch needle que debes conocer".',
      link: "https://www.domestika.org/es/blog/3175-5-artistas-de-punch-needle-que-debes-conocer",
    },
  ],
  2019: [
    {
      image: "/images/prensa/Ohlala_Octubre.jpg",
      title: "Revista Ohlalá Octubre",
      text: 'Mi barbudo "Piñata" seleccionado para formar parte de la sección "Elegidos Mandarina" de la revista Ohlalá del mes de octubre.',
      link: "https://www.instagram.com/p/B3Neb7DJQBM/",
    },
    {
      image: "/images/prensa/Casa_FOA.jpg",
      title: "Casa FOA",
      text: "Algunos de mis muñecos y almohadones bordados exhibidos en “Brotherhood”, el dormitorio para chicos diseñado por Coty Larguía para Casa FOA.",
      link: "https://www.clarin.com/arq/cuarto-infantil-inspirado-metodo-pedagogico-montessori_0_kObHarZ5.html",
    },
    {
      image: "/images/prensa/Apartment_Therapy.jpg",
      title: "Apartment Therapy",
      text: "La casa de Ligia Baleeiro decorada con mis almohadones. Nota hecha para el blog Apartment Theraphy, fotografiada por Magalí Saberian.",
      link: "https://www.apartmenttherapy.com/bold-colorful-argentinian-home-tour-photos-36640053",
    },
    {
      image: "/images/prensa/Ohlala_Julio.jpg",
      title: "Revista Ohlalá Julio",
      text: 'Mi almohadón "Terrazzo" seleccionado para formar parte de la sección "Elegidos Terrazzo" de la revista Ohlalá del mes de julio.',
      link: "https://www.instagram.com/p/B0Q0OriJz7R/",
    },
    {
      image: "/images/prensa/Ohlala_Mayo.jpg",
      title: "Revista Ohlalá Mayo",
      text: 'Mi almohadón "Mano" y muñeco "Tronco" seleccionados para formar parte de la sección "Elegidos Lana" de la revista Ohlalá del mes de mayo.',
      link: "https://www.instagram.com/p/BxbA2iTJ-w4/",
    },
    {
      image: "/images/prensa/The_Proper_Blog.jpg",
      title: "The proper blog",
      text: 'Mi almohadón "Mano" y "Líneas" seleccionado por Lexy Ward para ilustrar la nota "PUNCH DRUNK: 6 PUNCH NEEDLE CRAFTS TO CRUSH ON" del blog "The Proper Blog".',
      link: "https://theproperblog.com/inspiration/punch-needle-crafts-to-crush-on/",
    },
  ],
};

export default function Prensa() {
  return (
    <>
      <Head>
        <title>Prensa - Por Caro Bello</title>
      </Head>
      <main className="grid container py-20 mx-auto md:px-4 lg:px-16 xl:px-64">
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
      </main>
    </>
  );
}
