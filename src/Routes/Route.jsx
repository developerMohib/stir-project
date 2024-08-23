import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import HomeOne from "../Pages/Home/HomeOne";
import HomeTwo from "../Pages/Home/HomeTwo";
import HomeThree from "../Pages/Home/HomeThree";

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
          path: "/home-1",
          element : <HomeOne />
        },
        {
          path: "/home-2",
          element : <HomeTwo />
        },
        {
          path: "/home-3",
          element : <HomeThree />
        },
      ],
  },
]);
