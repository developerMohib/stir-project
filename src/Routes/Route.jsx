import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import HomeThree from "../Pages/Home/HomeThree/HomeThree";
import HomeTwo from "../Pages/Home/HomeTwo/HomeTwo";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Blog from "../Pages/Blog/Blog";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import CaseStudy from "../Pages/CaseStudy/CaseStudy";
import CaseDetails from "../Pages/CaseDetails/CaseDetails";
import ContactUs from "../Pages/ContactUs/ContactUs";
import FaqPage from "../Pages/FaqPage/FaqPage";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Product from "../Pages/Product/Product";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";

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
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/check-out",
        element: <Checkout />,
      },
      {
        path: "/case-study",
        element: <CaseStudy />,
      },
      {
        path: "/case-study-details",
        element: <CaseDetails />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product-details",
        element: <ProductDetails />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
]);
