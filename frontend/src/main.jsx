import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Cameras from "./pages/Cameras"
import ErrorPage from "./pages/Error";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: '/Cameras',
    element: <Cameras/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);