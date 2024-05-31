import React, { useEffect, useState } from "react";
import "./Listings.css";
import { Link } from "react-router-dom";

interface Props {
  rectColor: string;
  hColor: string;
  heading: string;
  para: string;
  date: string;
  id: string;
}

const Listings: React.FC<Props> = (props: Props) => {
  return (
    <div className="listings-container">
      <div
        className="listings-rectangle"
        style={{ backgroundColor: props.rectColor }}
      >
        <p style={{ color: props.hColor }}>H</p>
      </div>
      <div className="listings-name">
        <p className="visbyroundCF bold listings-name-para1">{props.heading}</p>
        <p className="visbyroundCF medium listings-name-para2">{props.para}</p>
      </div>
      <div className="listings-date">
        <p className="visbyroundCF bold">{props.date}</p>
      </div>
      <div className="listings-button">
        <button className="visbyroundCF demibold listings-button-enroll">
          <p>Enroll</p>
        </button>
        <Link
          to={`/events/${props.id}`}
          className="visbyroundCF demibold listings-button-details"
        >
          <p>Details</p>
        </Link>
      </div>
    </div>
  );
};

export default Listings;
