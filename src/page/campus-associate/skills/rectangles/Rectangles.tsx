import React from "react";
import "./Rectangles.css";

interface props {
  paragraph: string;
}
const Rectangles: React.FC<props> = (props) => {
  return (
    <div className="rectangles">
      <p className="vr-demi-bold">{props.paragraph}</p>
    </div>
  );
};

export default Rectangles;
