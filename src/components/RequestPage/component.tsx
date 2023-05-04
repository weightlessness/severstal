import React, { FC } from "react";
import RequestTable from "../RequestsTable";
import Loader from "../Loader";
import { useGetRequestCallback } from "../../context";
import { Props } from "./types";
import styles from "./styles.scss";

const Component: FC<Props> = ({ url, requestMethod }) => {
  const { isLoading, sendRequest } = useGetRequestCallback(url, requestMethod);

  return (
    <div className={styles.root}>
      <div className={styles.buttonWrapper}>
        <button
          disabled={isLoading}
          className={styles.button}
          onClick={() => sendRequest()}
        >
          Отправить {requestMethod.toUpperCase()} запрос
        </button>
        {isLoading && <Loader />}
      </div>

      <RequestTable />
    </div>
  );
};

export default Component;
