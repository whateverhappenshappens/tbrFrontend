import React from "react";
import "../../../styles/components/BloggingFooter.css";

const BloggingFooter: React.FC = () => {
  return (
    <div className="BloggingFooter">
      <h2 className="BloggingFooter-want-to-write-blog-text">
        Want to write a blog ?
      </h2>
      <p className="BloggingFooter-descriptio">
        Click here to showcase your blog to the world.
      </p>
      <a href="https://bit.ly/techbairnblog" target="_blank" rel="noopener noreferrer">
      <button type="submit" className="BloggingFooter-button">
        Submit Here
      </button></a>
    </div>
  );
};
export default BloggingFooter;
