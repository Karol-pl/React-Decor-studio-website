import React from "react";
import { Link } from "react-router-dom";
import "../styles/OfferPage.css";

const OfferPage = () => {
  return (
    <div>
      <Link to="/offers">
        <button className="offer_return__btn">Powrót</button>
      </Link>
    </div>
  );
};

export default OfferPage;
