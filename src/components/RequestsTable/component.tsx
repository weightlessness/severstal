import React, { FC } from "react";
import {
  useBody,
  useButtonText,
  useHeader,
  useTableClassname,
  useVisibleTable,
} from "./behavior";
import styles from "./styles.scss";

const Component: FC = () => {
  const { collapsed, setCollapsed } = useVisibleTable();
  const buttonText = useButtonText(collapsed);
  const tableClassName = useTableClassname(collapsed);

  const header = useHeader();
  const body = useBody();

  return (
    <div>
      <button
        className={styles.button}
        onClick={() => setCollapsed(!collapsed)}
      >
        {buttonText}
      </button>
      <div className={tableClassName}>
        <table className={styles.table}>
          {header}
          {body}
        </table>
      </div>
    </div>
  );
};

export default Component;
