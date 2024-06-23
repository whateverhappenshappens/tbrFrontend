import React, { useEffect, useState } from "react";
import "../../../styles/components/BloggingCard.css";
import Card from "./card/Card";
import user1 from "../../../assets/CA 3@2x.png";
import { blogs } from "../blogs";

const BloggingCard: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleShow = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bloggingcard">
      {blogs.slice(0, showAll ? blogs.length : 3).map((blog) => (
        <Card
          key={blog.id}
          id={blog.id}
          cardimg={blog.image}
          para={blog.genre}
          cardheading={blog.title}
          description={blog.summary}
          img={user1}
          name={blog.author}
          date={blog.date}
          body={blog.blog}
        />
      ))}
      <button className="toggle-btn" onClick={handleToggleShow}>
        {showAll ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default BloggingCard;
