import React, { FC } from "react";
import type { Props } from "./types";
import styles from "./styles.scss";
import { Link } from "react-router-dom";

const Component: FC<Props> = ({ to, label }) => {
  return (
    <div title={label} className={styles.root}>
      <Link to={to} className={styles.link}>
        <span className={styles.label}>{label}</span>
      </Link>
    </div>
  );
};

export default Component;
