import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Biggest.css";
import { Link } from "react-router-dom";

/* ---------- TYPES ---------- */
interface EventData {
  id: string | number;
  heading: string;
  subHeading: string;
  date?: string;
  bannerLinkPC: string;
}

interface Props {
  ActiveData?: EventData[];
}

/* ---------- COMPONENT ---------- */
const Biggest: React.FC<Props> = ({ ActiveData }) => {

  /* ---------- SLIDER SETTINGS ---------- */
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

  /* ---------- DATE FORMATTER ---------- */
  const formatDate = (isoDate?: string) => {
    if (!isoDate) return "Date unavailable";

    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return "Invalid date";

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}-${month}-${year} ${hours}:${minutes}`;
  };

  /* ---------- LOADING / EMPTY STATE ---------- */
  if (!ActiveData || !Array.isArray(ActiveData) || ActiveData.length === 0) {
    return <p>Loading...</p>;
  }

  /* ---------- UI ---------- */
  return (
    <div className="biggest-hackathon-carousel overflow-visible">
      <Slider {...settings}>
        {ActiveData.map((data) => (
          <div key={data.id} className="biggest-hackathon-slide">
            <div className="biggest-hackathon">

              <div className="biggest-hackathon-text">
                <p className="biggest-hackathon-text-large visbyroundCF extrabold">
                  {data.heading}
                </p>

                <p className="biggest-hackathon-text-small visbyroundCF medium">
                  {data.subHeading}
                </p>

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
                <img
                  src={data.bannerLinkPC}
                  alt={data.heading}
                  loading="lazy"
                />
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Biggest;