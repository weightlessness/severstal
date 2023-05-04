import React, { FC } from "react";
import useSiteMap from "../sitemap/useSiteMap";
import styles from "./styles.scss";
import NavigationItem from "./NavigationItem";

const Component: FC = () => {
  const items = useSiteMap();

  return (
    <nav className={styles.root}>
      <div className={styles.itemsWrap}>
        {items.map((item) => (
          <NavigationItem key={item.url} to={item.url} label={item.title} />
        ))}
      </div>
    </nav>
  );
};

export default Component;
