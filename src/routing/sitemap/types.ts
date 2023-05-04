import { ReactElement } from "react";

export interface PageData {
  title: string;
  url: string;
  render: () => ReactElement;
}

export enum Requests {
  GET = "get",
  POST = "post",
  DELETE = "delete",
}
