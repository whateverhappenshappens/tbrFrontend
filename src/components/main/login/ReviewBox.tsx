import React from "react";
import './ReviewBox.css';



export interface ReviewProps {
    id: string;
    content: string;
    name:string,
    img: string;
    college: string;
  }



const ReviewBox: React.FC<ReviewProps> = ({content, img,name, college}) => {


 return(
    <div className="review-container">

        <p className="review-text">{content}</p>
        <div className="person-info">
          <img src={img} className ="profile-pic" alt="Profile pic" />
          <div >
            <p className="user-name">{name}</p>
            <p className="user-college">{college}</p>
          </div>
        </div>

    </div>
 );

}

export default ReviewBox;