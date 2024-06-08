import React from "react";
import axios from "axios";
import "./Biggest.css";
import eventBoy from "../../../assets/event boy@2x.png";

const Biggest: React.FC = () => {
  const handleEnroll = async () => {
    try {
      const accessToken = localStorage.getItem("access-token");
      const response = await axios.post(
        "/api/cart/add", 
        {
          userId: "user-id",
          courses: ["web-dev-hackathon"],
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log("Enrollment successful", response.data);
    } catch (error) {
      console.error("Error enrolling in hackathon", error);
    }
  };

  return (
    <div className="biggest-hackathon">
      <div className="biggest-hackathon-text">
        <p className="biggest-hackathon-text-large visbyroundCF extrabold">
          All India Biggest <br /> Web Dev Hackathon
        </p>
        <p className="biggest-hackathon-text-small visbyroundCF medium">
          Join India's biggest Web Dev Hackathon and be a part of something
          grand! Earn exciting goodies on winning.
        </p>
        <button className="biggest-hackathon-button visbyroundCF bold" onClick={handleEnroll}>
          <p>Enroll Now</p>
        </button>
      </div>
      <div className="biggest-hackathon-img">
        <p className="image-para visbyroundCF extrabold">
          All India Biggest <br /> Web Dev Hackathon
        </p>
        <img src={eventBoy} alt="Event"></img>
      </div>
    </div>
  );
};

export default Biggest;
