import Image from "next/image";
import axios from "axios";
import { generateImageSizes } from "utils";

export default function Instagram({ posts }) {
  console.log({ posts });
  return (
    <section className="py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
      {posts.map(({ id, thumbnail_url, media_url, permalink }) => {
        return (
          <a key={id} className="relative h-auto square" href={permalink} target="_blank" rel="noreferrer">
            <Image
              src={thumbnail_url || media_url}
              layout="fill"
              objectFit="cover"
              sizes={generateImageSizes({
                sm: "50vw",
                md: "25vw",
                big: "16.66vw",
              })}
            />
          </a>
        );
      })}
    </section>
  );
}

export async function getServerSideProps() {
  const igToken = process.env.IG_TOKEN;

  if (!igToken) return { props: { posts: [] } };

  const url = `https://graph.instagram.com/me/media?limit=100&fields=id,media_type,permalink,thumbnail_url,media_url&access_token=${igToken}`;
  const feed = await axios.get(url);

  return {
    props: {
      posts: feed.data.data,
    },
  };
}
