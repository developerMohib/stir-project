import { Outlet, useLocation } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import "../assets/css/meanmenu.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/css/owl.theme.default.min.css";
import "../assets/css/icofont.min.css";
import "../assets/css/font-awesome-pro.css";
import "../assets/css/scrollcue.css";
import "../assets/css/magnific-popup.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import TopBar from "../components/TopBar/TopBar";
import Preloader from "../components/Preloader/Preloader";
import BeckToTop from "../components/BeckToTop/BeckToTop";
import FooterTwo from "../components/FooterTwo/FooterTwo";
import FooterThree from "../components/FooterThree/FooterThree";
import NavbarTwo from "../components/NavbarTwo/NavbarTwo";
import NavbarThree from "../components/NavbarThree/NavbarThree";


const Root = () => {
  const location = useLocation();
  const pathname = location?.pathname;

  const renderNavbar = () => {
    if (pathname === "/") {
      return <Navbar />;
    } else if (pathname === "/home-2") {
      return <NavbarTwo />;
    } else if (pathname === "/home-3") {
      return <NavbarThree />;
    }else {
      return <Navbar />;
    }
  };
  const renderFooter = () => {
    if (pathname === "/") {
      return <Footer />;
    } else if (pathname === "/home-2") {
      return <FooterTwo />;
    } else if (pathname === "/home-3") {
      return <FooterThree />;
    } else {
      return <Footer />;
    }
  };

  return (
    <div>
      <Preloader />
      {/* Render TopBar only on the Creative Agency page */}
      {pathname === "/" && <TopBar />}
      {/* <div>{renderNavbar()}</div> */}
      <Navbar/>
      <Outlet />
      <div>{renderFooter()}</div>
      <BeckToTop />
    </div>
  );
};

export default Root;
