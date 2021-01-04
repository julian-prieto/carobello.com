import { useState } from "react";

export default function YoutubeVideo({ youtubeId }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return isPlaying ? (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <iframe
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${youtubeId}?&autoplay=1&mute=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=${youtubeId}`}
        frameBorder="0"
        allowfullscreen
      />
    </div>
  ) : (
    <div
      style={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        cursor: "pointer",
      }}
      onClick={() => setIsPlaying(true)}
    >
      <video
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "auto",
          height: "auto",
          minWidth: "100%",
          minHeight: "100%",
        }}
        autoPlay
        muted
        loop
      >
        <source src="/videos/home_video_preview.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
