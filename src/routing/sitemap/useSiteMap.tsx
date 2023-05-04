import { PageData, Requests } from "./types";
import React from "react";
import RequestPage from "../../components/RequestPage";
import HomePage from "../HomePage";

const useSitemap = (): PageData[] => {
  return [
    {
      url: "/",
      title: "Главная",
      render: () => <HomePage />,
    },
    {
      url: "/get",
      title: "Get",
      render: () => (
        <RequestPage
          url={"https://httpbin.org/get"}
          requestMethod={Requests.GET}
        />
      ),
    },
    {
      url: "/post",
      title: "Post",
      render: () => (
        <RequestPage
          url={"https://httpbin.org/post"}
          requestMethod={Requests.POST}
        />
      ),
    },
    {
      url: "/delete",
      title: "Delete",
      render: () => (
        <RequestPage
          url={"https://httpbin.org/delete"}
          requestMethod={Requests.DELETE}
        />
      ),
    },
  ];
};

export default useSitemap;
