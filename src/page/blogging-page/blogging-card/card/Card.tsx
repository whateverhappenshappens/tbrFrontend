import React from "react";
import "../../../../styles/components/bCard.css";

import { useNavigate } from "react-router-dom";

interface BlogCardProps {
  id: string;
  cardimg: string;
  para: string;
  cardheading: string;
  description: string;
  img: string;
  name: string;
  date: string;
}

const Card: React.FC<BlogCardProps> = (props) => {
  const navigate = useNavigate();
  const handleBlogClick = (id: string) => {
    navigate(`/blog/${id}`);
  };
  return (
    <div onClick={() => handleBlogClick(props.id)} className="card">
      <div className="card-image">
        <img src={props.cardimg} alt="card" />
      </div>
      <div className="card-content">
        <p className="card-content-games">{props.para}</p>
        <h3 className="card-content-heading">{props.cardheading}</h3>
        <p className="card-content-description">{props.description}</p>
        <div className="card-content-user-details">
          <img
            src={props.img}
            alt=""
            className="card-content-user-details-img"
          />
          <div className="card-content-user-details-desc">
            <p className="name">{props.name}</p>
            <p className="date">{props.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
