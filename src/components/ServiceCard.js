import React from "react";
import { Link } from "react-router-dom";
import "../styles/ServiceCard.css";

const ServiceCard = (props) => {
  const card = props.cards.map((card) => {
    return (
      <div key={card.id} className="service_card">
        <img src={card.photo} alt={card.title} />
        <h2>{card.title}</h2>
        <Link to={`/offer/${card.id}`}>
          <button className="more_button">Więcej</button>
        </Link>
      </div>
    );
  });

  return <div className="services">{card}</div>;
};

export default ServiceCard;
