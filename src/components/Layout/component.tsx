import { useTitle } from "../../routing/sitemap";
import Navigation from "../../routing/Navigation";
import React, { FC, PropsWithChildren } from "react";
import styles from "./styles.scss";

const Component: FC<PropsWithChildren> = ({ children }) => {
  const title = useTitle();

  return (
    <div className={styles.root}>
      <span className={styles.title}>
        <h1>{title}</h1>
      </span>
      <Navigation />
      <section className={styles.content}>{children}</section>
    </div>
  );
};

export default Component;
