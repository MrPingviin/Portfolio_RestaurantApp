import React from "react";
import ReactDOM from "react-dom/client";
import AdminPage from "./admin/AdminPage";
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FrontPage from "./FrontPage";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },

  {
    path: "/AdminPage",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router} />
  </div>
);
