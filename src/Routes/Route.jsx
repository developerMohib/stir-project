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
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import SingleBlog from "../Pages/SingleBlog/SingleBlog";
import Team from "../Pages/Team/Team";
import TermCondition from "../Pages/TermCondition/TermCondition";
import TestominalPage from "../Pages/TestominalPage/TestominalPage";

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
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/case-study",
        element: <CaseStudy />,
      },
      {
        path: "/cases-study-details",
        element: <CaseDetails />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/faq",
        element: <FaqPage />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/products",
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
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/single-blog",
        element: <SingleBlog />,
      },
      {
        path: "/terms-conditions",
        element: <TermCondition />,
      },
      {
        path: "/testimonials",
        element: <TestominalPage />,
      },
    ],
  },
]);
