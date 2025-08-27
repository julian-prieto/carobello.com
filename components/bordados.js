import Image from "next/image";
import axios from "axios";
import Head from "next/head";

export default function Bordados({ posts }) {
  return (
    <>
      <Head>
        <title>Bordados - Caro Bello</title>
      </Head>
      <main className="py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
        {posts.map(({ id, thumbnail_url, media_url, permalink }) => {
          const imageUrl = `/api/image-proxy?imageUrl=${encodeURIComponent(thumbnail_url || media_url)}`;
          return (
            <a
              key={id}
              className="relative h-auto aspect-square"
              href={permalink}
              target="_blank"
              rel="noreferrer"
            >
              <Image src={imageUrl} alt={permalink} layout="fill" objectFit="cover" unoptimized />
            </a>
          );
        })}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const igToken = process.env.IG_TOKEN;

  if (!igToken) return { props: { posts: [] } };

  const url = `https://graph.instagram.com/me/media?limit=100&fields=id,media_type,caption,permalink,thumbnail_url,media_url&access_token=${igToken}`;
  const feed = await axios.get(url);
  const posts = feed.data.data.map((item) => ({
    id: item.id || null,
    thumbnail_url: item.thumbnail_url || null,
    media_url: item.media_url || null,
    permalink: item.permalink || null,
  }));

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
}
