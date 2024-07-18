import React from "react";
import "./Try_listing.css";
import { Link } from "react-router-dom";

const listingsData = [
  {
    id: 1,
    title: "Building & Scaling a D2C Brand in India Building & Scaling a D2C Brand in India",
    speaker: "Arjun Vaidya, Founder- Dr. Vaidya, V3 Ventures",
    date: "13 May 2022",
    time: "13:00",
  },
  {
    id: 2,
    title: "Innovative Approaches to Digital Marketing Innovative Approaches to Digital Marketing ",
    speaker: "Ravi Kumar, Head of Marketing, XYZ Corp",
    date: "22 June 2022",
    time: "14:30",
  },
  {
    id: 3,
    title: "The Future of AI in Healthcare",
    speaker: "Dr. Meera Singh, Chief Scientist, HealthTech",
    date: "5 July 2022",
    time: "10:00",
  },
  {
    id: 4,
    title: "Sustainable Practices in Modern Business",
    speaker: "Anita Sharma, CEO, Green Solutions",
    date: "19 August 2022",
    time: "11:00",
  },
];

const TryListings: React.FC = () => {
  return (
    <div className="listings-wrapper">
      {listingsData.map((listing) => (
        <div key={listing.id} className=" listings-container">
          <div className="listings-rectangle">
            <p>H</p>
          </div>
          <div className="listings-content">
            <div className="listings-name">
              <p className="listings-name-para1">{listing.title}</p>
              <p className="listings-name-para2">| {listing.speaker}</p>
            </div>
            <div className="listings-date">
              <p>{listing.date}<br />{listing.time}</p>
            </div>
          </div>
          <div className="listings-button">
            <button className="listings-button-enroll">
              <p>Enroll</p>
            </button>
            <Link to={`/events/${listing.id}`} className="listings-button-details">
              <p>Details</p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TryListings;
