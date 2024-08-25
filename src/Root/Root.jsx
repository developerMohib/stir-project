import { Outlet } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import "../assets/css/font-awesome-pro.css";
import "../assets/css/icofont.min.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import TopBar from "../components/TopBar/TopBar";
import Preloader from "../components/Preloader/Preloader";

const Root = () => {
  return (
    <div>
      <Preloader />
      <TopBar/>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
