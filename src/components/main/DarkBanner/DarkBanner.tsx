import React from "react";
import "../../../styles/components/DarkBanner.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface DarkBannerProps {
  title: string;
  subtitle: string;
  logos: string[];
}

const DarkBanner: React.FC<DarkBannerProps> = ({ title, subtitle, logos }) => {
  const settings = {
    infinite: true,
    speed: 1500,
    slidesToShow: logos.length / 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: logos.length / 4,
        },
      },
    ],
  };
  return (
    <div className="dark-banner mb-[5rem]">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="logo-container">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt={`logo-${index}`} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DarkBanner;
