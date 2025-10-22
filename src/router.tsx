import { createBrowserRouter } from "react-router-dom";

import NotFound from "./pages/404/404";
import ViewListItem from "./pages/ViewListItem";
import Layout from "./layouts/Layout";
import ToDoListPage from "./pages/ToDoListPage";
import ViewList from "./pages/ViewList";



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <ToDoListPage /> },
        { path: "/list/", element: <ViewList/> },
        { path: "/list/:id", element: <ViewListItem /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ],
  { basename: "/app" }
);
export default router;
