import React, { Component } from "react";
import ServiceCard from "../components/ServiceCard";
import wedding from "../assets/wedding.jpg";
import car from "../assets/car.jpg";
import gift from "../assets/gift.jpg";
import church from "../assets/church.jpg";

class OfferListPage extends Component {
  state = {
    cards: [
      {
        id: 0,
        title: "Dekoracje sal weselnych",
        photo: wedding,
        shortInfo:
          "Dekoracja sali jest zawsze oryginalnym projektem przygotowanym pod konkretnego klienta. W nasze usługi wchodzi dekoracja stołu Państwa Młodych, kompozycje na stoły gości weselnych, artystyczne dekoracje z wykorzystaniem tkanin, balonów oraz naczyń dekoracyjnych.",
      },
      {
        id: 1,
        title: "Dekoracje aut",
        photo: car,
        shortInfo:
          "Proponujemy dekoracje z żywych lub sztucznych kwiatów, przypinki do klamek oraz okolicznościowe tablice rejestracyjne.",
      },
      {
        id: 2,
        title: "Prezenty okolicznościowe",
        photo: gift,
        shortInfo:
          "Zajmujemy się prezentami okolicznościowymi na każdą okazję : bukiety z cukierków, torty oraz wózki z pampersów i wiele innych. Pakujemy także prezenty.",
      },
      {
        id: 3,
        title: "Dekoracje kościoła",
        photo: church,
        shortInfo:
          "Proponujemu Państwu strojenie ołtarza żywymi kwiatami, alejki tkaninowe, pokrowce na krzesła i klęczniki Państwa Młodych. Płatki róż do obsypywania Młodych.",
      },
    ],
  };
  render() {
    return <ServiceCard cards={this.state.cards} />;
  }
}

export default OfferListPage;
