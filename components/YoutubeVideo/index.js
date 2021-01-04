export default function YoutubeVideo({ youtubeId }) {
  return (
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
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&rel=0`}
        frameBorder="0"
        allowfullscreen
      />
    </div>
  );
}
