import React, { FC } from "react";
import styles from "./styles.scss";

const Component: FC = () => {
  return (
    <div className={styles.spinner}>
      <span className={styles.horizontal}></span>
      <span className={styles.vertical}></span>
      <span className={styles.spinner}></span>
    </div>
  );
};

export default Component;
