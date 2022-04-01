import { useState } from "react";

export default function YoutubeVideo({ youtubeId, src }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return isPlaying ? (
    <div className="relative h-full">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${youtubeId}?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=${youtubeId}`}
        frameBorder="0"
        allowfullscreen
      />
    </div>
  ) : (
    <div className="relative h-full cursor-pointer" onClick={() => setIsPlaying(true)}>
      <video className="object-cover w-full h-full absolute top-0 left-0" autoPlay muted loop playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
