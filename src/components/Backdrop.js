import React from "react";
import "../styles/Backdrop.css";

const backdrop = (props) => {
  return <div className="backdrop" onClick={props.click}></div>;
};

export default backdrop;
