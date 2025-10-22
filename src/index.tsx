import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import "./assets/SCSS/normalize.scss";
import "./assets/SCSS/style.scss";

import { ToDoListPage } from "./pages/ToDoListPage";
import HomePage from "./pages/HomePage";
import { iToDo } from "./models/todo-items";
import NotFound from "./pages/404/404";
import ItemDiscription from "./pages/ItemDiscription";
import { Layout } from "./layouts/Layout";

const todos: iToDo[] = [
  { id: 0, text: "Первое действие", isDone: false },
  { id: 1, text: "Второе действие", isDone: true },
  { id: 2, text: "Третье действие", isDone: false },
  { id: 3, text: "Четвертое действие", isDone: true },
];
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage todos={todos} />,
      },
      {
        path: "/todo",
        element: <ToDoListPage />,
      },
      {
        path: "/list/:id",
        element: <ItemDiscription todos={todos} />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
], {basename: '/app'});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
