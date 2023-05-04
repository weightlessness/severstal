import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { useRequestsContext } from "../../context";
import styles from "./styles.scss";
import classNames from "classnames";

export const useHeader = (): ReactElement => {
  return (
    <thead>
      <tr>
        <th className={styles.cell}>Номер</th>
        <th className={classNames(styles.cell, styles.cell_url)}>URL</th>
        <th className={styles.cell}>Статус</th>
        <th className={styles.cell}>Время</th>
      </tr>
    </thead>
  );
};

export const useBody = (): ReactElement => {
  const { requestsList } = useRequestsContext();

  return (
    <tbody>
      {requestsList.map((request, requestIndex) => {
        return (
          <tr key={request.date.toLocaleTimeString("ru-RU")}>
            <td className={styles.cell}>{requestIndex + 1}</td>
            <td className={classNames(styles.cell, styles.cell_url)}>
              {request.url}
            </td>
            <td className={styles.cell}>{request.status}</td>
            <td className={styles.cell}>
              {request.date.toLocaleTimeString("ru-RU")}
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export const useVisibleTable = () => {
  const collapsedValue = localStorage.getItem("collapsed");
  const localStorageValue =
    collapsedValue !== null ? JSON.parse(collapsedValue) : false;

  const [collapsed, setCollapsed] = useState<boolean>(
    localStorageValue.collapsed
  );

  useEffect(() => {
    localStorage.setItem("collapsed", JSON.stringify({ collapsed }));
  }, [collapsed]);

  return {
    collapsed,
    setCollapsed,
  };
};

export const useTableClassname = (isVisible: boolean) => {
  return useMemo(
    () =>
      classNames(styles.tableWrapper, {
        [styles.tableWrapper_isVisible]: isVisible,
      }),
    [isVisible]
  );
};

export const useButtonText = (isVisible: boolean) =>
  useMemo(
    () => `${isVisible ? "Скрыть" : "Показать"} таблицу запросов`,
    [isVisible]
  );
