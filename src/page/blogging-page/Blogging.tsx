import React, { useRef, useEffect } from "react";

import "../../styles/pages/Blogging.css";
import BloggingHeader from "./blogging-header/BloggingHeader";
import FeedbackScroll from "./feedback-scroll/FeedbackScroll";
import BloggingCard from "./blogging-card/BloggingCard";
import BloggingFooter from "./blogging-footer/BloggingFooter";

// import { Blog } from "../../types/Blog";

interface BloggingPageProps extends React.JSX.IntrinsicAttributes {
  // changeBlogCallback: (blog: Blog) => void;
  headerHeight: number;
}

const Blogging: React.FC<BloggingPageProps> = ({ headerHeight }) => {
  const bloggingContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bloggingContainer.current!.style.paddingTop = `${headerHeight}px`;
  }, [headerHeight]);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
  return (
    <div ref={bloggingContainer} className="blogging-page">
      <BloggingHeader />
      <FeedbackScroll />
      <BloggingCard />
      <BloggingFooter />
    </div>
  );
};
export default Blogging;
