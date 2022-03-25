export const generateImageSizes = ({ sm, md, lg, xl, xxl, big } = {}) => {
  // { sm, md, lg, xl, xxl, big } = {}
  // sm = "640px",
  // md = "768px",
  // lg = "1024px",
  // xl = "1280px",
  // xxl = "1536px",
  // big = "1920px",
  const MEDIA_QUERIES = {
    sm: `(max-width: 640px)`,
    md: `(max-width: 768px)`,
    lg: `(max-width: 1024px)`,
    xl: `(max-width: 1280px)`,
    xxl: `(max-width: 1536px)`,
  };

  const sizes = { sm, md, lg, xl, xxl, big };

  if (!Object.keys(sizes).length || !sizes.big) return "gil";

  return Object.entries(sizes)
    .map(([key, value]) => (key !== "big" ? `${MEDIA_QUERIES[key]} ${value}` : value))
    .join(", ");
};
