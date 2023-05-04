import { useEffect } from "react";
import styles from "./styles.scss";

export const useApplyBodyStyle = () => {
  useEffect(() => {
    document.body.classList.add(styles.body);
  }, []);
};
