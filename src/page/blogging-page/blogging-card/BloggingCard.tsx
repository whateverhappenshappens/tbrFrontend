import React from "react";

import "../../../styles/components/BloggingCard.css";
import Card from "./card/Card";
// import banner1 from "../../../assets/rise-humanoids-with-advanced-headgear-generative-ai.png";
// import banner2 from "../../../assets/fashion-little-boy@2x.png";
// import banner3 from "../../../assets/ai-cloud-concept-with-robot-arm@2x.png";
import user1 from "../../../assets/CA 3@2x.png";
// import { AiOutlineRight } from "react-icons/ai";

import { blogs } from "../blogs";

const BloggingCard: React.FC = () => {
  return (
    <div className="bloggingcard">
      {blogs.map((blog) => (
        <Card
          id={blog.id}
          cardimg={blog.image}
          para={blog.genre}
          cardheading={blog.title}
          description={blog.summary}
          img={user1}
          name={blog.author}
          date={blog.date}
        />
      ))}
      {/* <div className="bloggingcard-pagination">
        <li className="page-item">
          <a className="page-link" href="">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="">
            ...
          </a>
        </li>
        <li className="page-item">
          <a className="page-link" href="">
            10
          </a>
        </li>
        <AiOutlineRight className="bloggingcard-paginayion-right-icon" />
        <button className="bloggingcard-paginayion-next-btn">Last</button>
      </div> */}
    </div>
  );
};
export default BloggingCard;
