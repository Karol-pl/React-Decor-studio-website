import React from "react";
import logo from "../assets/logo.svg";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div className="home_page__wrapper">
      <img src={logo} alt="logo" className="logo_small" />
      <div className="about_section">
        <h1>O nas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
          veritatis, ratione sunt provident libero, ut perspiciatis optio neque
          labore iste nihil tempora placeat hic cupiditate qui? Dolore
          distinctio enim, accusamus recusandae id quod nemo alias ab expedita
          atque, itaque quaerat qui exercitationem, veniam molestias dicta natus
          aut vero dignissimos rem quos. Magni dignissimos cumque aliquid,
          officia expedita fuga assumenda, dolor repellat nisi neque modi
          laudantium quo! Debitis, inventore repudiandae. Sint ducimus quos
          molestiae. Suscipit pariatur cumque numquam, labore voluptates
          accusamus vel. Vitae animi a quos quisquam tenetur laborum impedit
          natus delectus nam officia, quae asperiores mollitia ab ratione sit!
          Consequuntur.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
