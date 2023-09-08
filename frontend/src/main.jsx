import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Cameras from "./pages/Cameras"
import ErrorPage from "./pages/Error";
import Navbar from "./components/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


const AppLayout = ()=>(
  <>
    <Navbar/>
    <Outlet/>
  </>
)


const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        element: <Home/>,
        path: '/'
      },
      {
        element: <Cameras/>,
        path: 'Cameras'
      }
    ],
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);