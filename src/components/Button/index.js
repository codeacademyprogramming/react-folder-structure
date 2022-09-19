// Other imports

// Style import
import styles from "./index.module.css";

export function Button() {
  return (
    <button className={`${styles["button-secondary"]} ${styles.button}`}>
      Submit
    </button>
  );
}
