import React from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";

const list = [
  { name: "strona główna", path: "/", exact: true },
  { name: "realizacje", path: "/our-work" },
  { name: "oferta", path: "/offers" },
  { name: "kontakt", path: "/contact" },
];

const Navbar = () => {
  const menu = list.map((item) => {
    return (
      <li key={item.name}>
        <NavLink to={item.path} exact={item.exact ? item.exact : false}>
          {item.name}
        </NavLink>
      </li>
    );
  });
  return <ul className="nav_list">{menu}</ul>;
};

export default Navbar;
