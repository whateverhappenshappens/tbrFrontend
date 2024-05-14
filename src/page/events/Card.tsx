import React from "react";
import "./Card.css";

interface Props {
  //   image: string;
  heading: string;
  color: string;
  para: string;
}

const Cards: React.FC<Props> = (props) => {
  return (
    <div className="exp-cards">
      <div
        className="exp-cards-colorfulbg"
        style={{ backgroundColor: props.color }}
      >
        {/* REMOVE AFTER ADDING IMAGE */}
        <div
          className="img-circle"
          style={{
            border: "2px solid white",
            width: "90px",
            height: "90px",
            borderRadius: "50%",
          }}
        ></div>
        {/* <img src={props.image} alt={props.heading} className="exp-card-image" /> */}
      </div>
      <p className="exp-cards-head">{props.heading}</p>
      <div className="exp-cards-para">{props.para}</div>
    </div>
  );
};

export default Cards;
