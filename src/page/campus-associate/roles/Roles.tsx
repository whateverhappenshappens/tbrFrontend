import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Roles.css";
import Cards from "./Cards/Cards";
import adduser from "../../../assets/add-friend.png";

const Roles: React.FC = () => {
  const cardsData = [
    {
      para: "Enhance your marketing skills to elevate our brand presence and gain recognition in your college.",
      image: adduser,
      color: "#FECBC4",
    },
    {
      para: "Encourage your college peers to join our diverse social media platforms.",
      image: adduser,
      color: "#FECBC4",
    },
    {
      para: "Promote TechBairn by sharing posters on WhatsApp, Facebook, and Instagram.",
      image: adduser,
      color: "#FECBC4",
    },
    {
      para: "Display our event and program posters on your college notice boards.",
      image: adduser,
      color: "#FECBC4",
    },
    {
      para: "Provide weekly updates on your work database.",
      image: adduser,
      color: "#FECBC4",
    },
    {
      para: "Represent us in various college clubs and groups, sharing your innovative ideas.",
      image: adduser,
      color: "#FECBC4",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="roles">
      <div className="roles-head">
        <p className="vr-bold">Roles and Responsibilities</p>
      </div>
      <div className="cards-container">
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            color={card.color}
            para={card.para}
          />
        ))}
      </div>
      <Slider {...settings} className="slick-slider-mobile">
        {cardsData.map((card, index) => (
          <div key={index}>
            <Cards image={card.image} color={card.color} para={card.para} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Roles;
