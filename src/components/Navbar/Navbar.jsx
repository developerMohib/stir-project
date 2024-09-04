import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavbarTwo from "../NavbarTwo/NavbarTwo";
import NavbarThree from "../NavbarThree/NavbarThree";
import NavbarOne from "../NavbarOne/NavbarOne";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();
  const pathname = location?.pathname;

  const navlinks1 = (
    <>
      <NavbarOne />
    </>
  );
  const navlinks2 = (
    <>
      <NavbarTwo />
    </>
  );
  const navlinks3 = (
    <>
      <NavbarThree />
    </>
  );

  const renderNavbar = () => {
    if (pathname === "/") {
      return navlinks1;
    } else if (pathname === "/home-2") {
      return navlinks2;
    } else if (pathname === "/home-3") {
      return navlinks3;
    } else {
      return navlinks1;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`navbar-area ${isSticky ? "is-sticky" : ""}`}>
      {renderNavbar()}
    </div>
  );
};

export default Navbar;
