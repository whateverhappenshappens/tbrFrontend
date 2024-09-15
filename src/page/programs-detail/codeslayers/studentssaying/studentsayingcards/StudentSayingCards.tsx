import React from "react";
import "./StudentSayingCards.css";
import { HiMiniUser } from "react-icons/hi2";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface Props {
  color: string;
  logocolor: string;
  username: string;
  college: string;
  link: string;
  review: string;
  rating: number;
}

const StudentSayingCard: React.FC<Props> = (props) => {
  const arr = new Array<number>(5);

  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }

  return (
    <div className="studentsayingcard">
      <div className="studentsayingcard-info">
        <div
          className="studentsayingcard-logo"
          style={{ backgroundColor: props.color }}
        >
          <HiMiniUser color={props.logocolor} size={100} />
        </div>
        <div className="studentsayingcard-profile">
          <p className="vr-bold studentsayingcard-profile-name">
            {props.username}
          </p>
          <p className=" studentsayingcard-profile-name">
            {props.college}
          </p>
        </div>
        <div className="studentsayingcard-linkedin">
          <BsLinkedin color="#6D87F5" size={50} />
        </div>
      </div>
      <div className="studentsayingcard-review">
        <p>{props.review}</p>
      </div>
      <div className="studentsayingcard-card-stars">
        {arr.map((value, key) =>
          key < props.rating ? (
            <AiFillStar key={key} color="#6D87F5" size={40} />
          ) : (
            <AiOutlineStar key={key} color="#6D87F5" size={40} />
          )
        )}
      </div>
    </div>
  );
};
export default StudentSayingCard;
