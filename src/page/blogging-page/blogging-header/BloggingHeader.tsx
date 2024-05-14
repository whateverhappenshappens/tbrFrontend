import React from "react";
import "../../../styles/components/BloggingHeader.css";
import header from "../../../assets/Group 399.svg";
import { FaSearch, FaArrowRight } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const BloggingHeader: React.FC = () => {
  return (
    <div className="blogging-page-header">
      <div className="blogging-page-header-img">
        <img src={header} alt="header" />
      </div>
      <div className="blogging-page-header-search-box">
        <div className="blogging-page-header-search-box-search-icon">
          <FaSearch />
        </div>
        <input type="search" id="search" name="search" placeholder="Search" />
        <div className="blogging-page-header-search-box-arrow-icon">
          <FaArrowRight />
        </div>
      </div>
      <div className="blogging-page-header-nav-bar">
        <NavLink to="/blog">All</NavLink>
        <NavLink to="/blog/education">Education</NavLink>
        <NavLink to="/blog/politics">Politics</NavLink>
        <NavLink to="/blog/games">Games</NavLink>
        <NavLink to="/blog/technology">Technology</NavLink>
        <NavLink to="/blog/electronics">Electronics</NavLink>
      </div>
    </div>
  );
};
export default BloggingHeader;
