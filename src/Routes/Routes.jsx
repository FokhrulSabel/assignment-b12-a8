
import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Apps from "./../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Installation from "../Pages/Installation";
import Details from "../Pages/Details";
import AppWrapper from "../Layouts/AppWrapper";


const router = createBrowserRouter([
  {
    path: "/",
    element:<AppWrapper />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/apps/:id",
        element: <Details />,
        
      },
    ],
  },
]);

export default router;
