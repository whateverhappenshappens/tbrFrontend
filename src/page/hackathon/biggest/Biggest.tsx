import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Biggest.css";
import { Link } from "react-router-dom";

interface Props {
  ActiveData: any;
}

const Biggest: React.FC<Props> = ({ ActiveData }) => {
  console.log(ActiveData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  // Function to format the date string, removing 'T' and 'Z'
  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    // Format: YYYY-MM-DD HH:MM
    return `${year}-${month}-${day} ${hours}:${minutes}`;
  };

  return (
    <div className="biggest-hackathon-carousel overflow-visible">
      <Slider {...settings}>
        {ActiveData && Array.isArray(ActiveData) ? (
          ActiveData.map((data: any, index: number) => (
            <div key={index} className="biggest-hackathon-slide">
              <div className="biggest-hackathon">
                <div className="biggest-hackathon-text">
                  <p className="biggest-hackathon-text-large visbyroundCF extrabold">
                    {data.heading}
                  </p>
                  <p className="biggest-hackathon-text-small visbyroundCF medium">
                    {data.subHeading}
                  </p>
                  {/* Formatted Date */}
                  <p className="biggest-hackathon-text-small visbyroundCF medium">
                    {formatDate(data.date)}
                  </p>
                  <Link to={`/events/${data.id}`}>
                    <button className="biggest-hackathon-button visbyroundCF bold">
                      <p>Enroll Now</p>
                    </button>
                  </Link>
                </div>
                <div className="biggest-hackathon-img">
                  <p className="image-para visbyroundCF extrabold">
                    {data.heading}
                  </p>
                  <img src={data.bannerLinkPC} alt={data.heading} />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Slider>
    </div>
  );
};

export default Biggest;
