import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavbarMobile.css";

const listMobile = [
  { name: "strona główna", path: "/", exact: true },
  { name: "realizacje", path: "/our-work" },
  { name: "oferta", path: "/offers" },
  { name: "kontakt", path: "/contact" },
];

const NavbarMobile = () => {
  const mobileNavbar = listMobile.map((item) => {
    return (
      <li key={item.name}>
        <NavLink to={item.path} exact={item.exact ? item.exact : false}>
          {item.name}
        </NavLink>
      </li>
    );
  });
  return <ul className="mobile_navbar">{mobileNavbar}</ul>;
};

export default NavbarMobile;
