import styles from "./loading.module.css";

function loading() {
  return <p className={styles.loading}>Fetching Meals...</p>;
}

export default loading;
