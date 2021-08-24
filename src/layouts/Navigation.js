import React from "react";
import Navbar from "../components/Navbar";
import logo from "../assets/logo.svg";
import "../styles/Navigation.css";
import BurgerToggle from "../components/BurgerToggle";

const Navigation = (props) => {
  return (
    <header className="header">
      <nav className="navigation">
        <img src={logo} alt="logo" className="logo" />
        <BurgerToggle click={props.toggleClick} />
        <Navbar />
      </nav>
    </header>
  );
};

export default Navigation;
