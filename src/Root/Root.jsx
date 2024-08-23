import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import TopBar from "../components/TopBar/TopBar";

const Root = () => {
  return (
    <div>
      <TopBar/>
      <Navbar/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
