import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
import { ReactComponent as Facebook } from "../assets/facebook.svg";
import { ReactComponent as Instagram } from "../assets/instagram.svg";
import { ReactComponent as GoogleMap } from "../assets/googlemaps.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_wrapper">
        <div className="footer_icons">
          <Link to={{ pathname: "https://www.facebook.com" }} target="_blank">
            <Facebook title="facebook account link" className="facebook" />
          </Link>
          <Link to={{ pathname: "https://www.instagram.com" }} target="_blank">
            <Instagram title="instagram account link" className="instagram" />
          </Link>
          <Link
            to={{ pathname: "https://goo.gl/maps/jqf4285WBrYA2cdh6" }}
            target="_blank"
          >
            <GoogleMap title="google roadmap link" className="googlemap" />
          </Link>
        </div>
        <p>&#169; benart 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
