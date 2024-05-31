// Cards.tsx
import React from "react";
import "./Cards.css";

interface Props {
  image: string;
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
        <img src={props.image} alt={props.heading} className="exp-card-image" />
      </div>
      <p className="exp-cards-head vr-bold">{props.heading}</p>
      <div className="exp-cards-para vr-regular">{props.para}</div>
    </div>
  );
};

export default Cards;
