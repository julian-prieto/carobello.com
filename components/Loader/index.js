import styles from "./styles.module.scss";
export default function Loader({ color }) {
  // return <div className={styles.loader} />;
  return <div className={`${styles.loader} ${color === "white" ? styles["loader-white"] : styles["loader-black"]}`} />;
}
