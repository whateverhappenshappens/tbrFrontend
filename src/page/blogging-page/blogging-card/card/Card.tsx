import React, { useEffect, useState } from "react";
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
  body: string;
}

const Card: React.FC<BlogCardProps> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const [value, setValue] = useState<boolean>(false);
  const handleBlogClick = (id: string) => {
    setValue(!value);
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
        {value ? (
          <p className="card-content-description">{props.description}</p>
        ) : (
          <p className="card-content-description">{props.description}</p>
        )}
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
