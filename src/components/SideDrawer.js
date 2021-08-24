import React from "react";
import NavbarMobile from "./NavbarMobile";
import "../styles/SideDrawer.css";
import logo from "../assets/logo.svg";

const SideDrawer = (props) => {
  let drawerClasses = ["mobile_nav"];

  if (props.show) {
    drawerClasses = ["mobile_nav", "mobile_nav__open"];
  }
  return (
    <nav className={drawerClasses.join(" ")}>
      <img src={logo} alt="logo" className="logo_mobile" />
      <NavbarMobile />
    </nav>
  );
};

export default SideDrawer;
