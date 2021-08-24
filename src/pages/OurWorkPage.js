import React from "react";
import "../styles/OurWorkPage.css";
import glass from "../assets/glass.jpg";
import glassball from "../assets/glassball.jpg";
import cosmos from "../assets/cosmos.jpg";
import rio from "../assets/rio.jpg";
import travel from "../assets/travel.jpg";
import water from "../assets/water.jpg";

const Imgs = [
  {
    name: glass,
    id: "0",
    alt: "image of window",
    text: "some nice description of it",
    styleClass: "w-2 h-2",
  },
  {
    name: glassball,
    id: "1",
    alt: "image of glassball",
    text: "some nice description of it",
    styleClass: "w-1 h-1",
  },
  {
    name: cosmos,
    id: "2",
    alt: "image of cosmos",
    text: "some nice description of it",
    styleClass: "w-1 h-1",
  },
  {
    name: rio,
    id: "3",
    alt: "image of rio de janeiro",
    text: "some nice description of it",
    styleClass: "w-2 h-2",
  },
  {
    name: travel,
    id: "4",
    alt: "image of travel",
    text: "some nice description of it",
    styleClass: "w-1 h-3",
  },
  {
    name: water,
    id: "5",
    alt: "image of water",
    text: "some nice description of it",
    styleClass: "w-2 h-1",
  },
];

const OurWorkPage = () => {
  const images = Imgs.map((image) => {
    return (
      <div key={image.id} className={`gallery_item ${image.styleClass}`}>
        <div className="gallery_image">
          <img src={image.name} alt={image.alt} />
          <div className="gallery_text">{image.text}</div>
        </div>
      </div>
    );
  });
  return (
    <div className="our_work">
      <h1>Nasze realizacje</h1>
      <div className="gallery">{images}</div>
    </div>
  );
};

export default OurWorkPage;
