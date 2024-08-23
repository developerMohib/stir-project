import { Outlet } from "react-router-dom";
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
