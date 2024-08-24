import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import HomeThree from "../Pages/Home/HomeThree/HomeThree";
import HomeTwo from "../Pages/Home/HomeTwo/HomeTwo";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home-2",
        element: <HomeTwo />,
      },
      {
        path: "/home-3",
        element: <HomeThree />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
    ],
  },
]);
