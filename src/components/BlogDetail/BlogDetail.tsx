import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// import { Blog } from "../../types/Blog";
import { blogs } from "../../page/blogging-page/blogs";

import AuthorImage from "../../assets/CA 3@2x.png";

interface BlogDetailProps extends React.JSX.IntrinsicAttributes {
  headerHeight: number;
  //   selectedBlog: Blog | null;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ headerHeight }) => {
  const blogDetailContainer = useRef<HTMLDivElement>(null);
  const { id } = useParams();

  const currentBlog = blogs.filter((blog) => blog.id === id)[0];

  useEffect(() => {
    blogDetailContainer.current!.style.paddingTop = `${headerHeight}px`;
  }, [headerHeight]);
  // useEffect(
  //   () => ,
  //   []
  // );

  return (
    <div
      ref={blogDetailContainer}
      className="flex flex-col gap-5 sm:gap-10 px-[30px] md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] mt-10 overflow-visible"
    >
      <div className="text-center text-[#6D87F5] font-bold text-xl sm:text-3xl">
        {currentBlog?.genre}
      </div>
      <div className="text-center text-[#2E436A] text-4xl sm:text-6xl font-bold overflow-hidden">
        {currentBlog?.title}
      </div>
      <div className="blog-banner xl:h-[900px] overflow-hidden">
        <img
          src={currentBlog?.image}
          alt="blog main image"
          className="w-full"
        />
      </div>
      <div className="author-likes">
        <div className="author flex items-center gap-3">
          <div className="author-img">
            <img
              src={AuthorImage}
              alt="blog author photo"
              className="w-24 sm:w-32"
            />
          </div>
          <div className="flex flex-col text-[#5E5E5E] text-2xl sm:text-4xl">
            <div className="font-bold overflow-hidden">
              {currentBlog?.author}
            </div>
            <div className="overflow-hidden">{currentBlog?.date}</div>
          </div>
        </div>
      </div>
      <main
        dangerouslySetInnerHTML={{ __html: currentBlog!.blog }}
        className="text-justify text-xl sm:text-3xl lg:text-4xl text-[#5E5E5E] overflow-visible"
      >
        {/* {currentBlog?.blog} */}
      </main>
    </div>
  );
};

export default BlogDetail;
