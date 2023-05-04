import React, { useCallback, useContext, useState } from "react";
import { RequestData, RequestsContext } from "./types";

export const MainContext = React.createContext<RequestsContext | null>(null);

export const useContextDefaultValues = (): RequestsContext => {
  const [requestsList, setRequests] = useState<RequestData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const addRequest = (newRequest: RequestData) => {
    setRequests((prevState) => [...prevState, newRequest]);
  };

  return { requestsList, addRequest, isLoading, setIsLoading };
};
export const useRequestsContext = (): RequestsContext => {
  const defaultValues = useContextDefaultValues();
  const context = useContext(MainContext);
  if (context === null) return defaultValues;
  return context;
};

export const useGetRequestCallback = (url: string, method: string) => {
  const { addRequest, isLoading, setIsLoading } = useRequestsContext();

  const sendRequest = useCallback(async () => {
    if (!isLoading) {
      const controller = new AbortController();
      const abortRequestTimer = setTimeout(() => controller.abort(), 5000);

      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method,
          signal: controller.signal,
        });
        addRequest({
          url: response.url,
          status: response.status,
          date: new Date(),
        });
      } catch (e: unknown) {
        if (controller.signal.aborted) alert("Запрос выполнялся дольше 5 секунд и был отменён");
        else if (e instanceof Error) alert(`Произошла ошибка: ${e.toString()}`);
      } finally {
        clearTimeout(abortRequestTimer);
        setIsLoading(false);
      }
    }
  }, [addRequest, isLoading, setIsLoading]);

  return { isLoading, sendRequest };
};
