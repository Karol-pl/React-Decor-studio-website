import React from "react";
import "../styles/BurgerToggle.css";

const BurgerToggle = (props) => {
  return (
    <button className="toggle_button" onClick={props.click}>
      <div className="toggle_line"></div>
      <div className="toggle_line"></div>
      <div className="toggle_line"></div>
    </button>
  );
};

export default BurgerToggle;
