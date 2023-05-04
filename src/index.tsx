import React from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./routing/AppRouter";

const container = document.getElementById("app-root") as HTMLElement;
const root = createRoot(container);
root.render(<AppRouter />);
