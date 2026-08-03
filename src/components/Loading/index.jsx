import { useLoading } from "../../store/ui";
import styles from "./Loading.module.scss";

function Loading() {
  const isLoading = useLoading();

  if (!isLoading) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default Loading;
