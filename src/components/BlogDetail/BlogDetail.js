import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
// import { Blog } from "../../types/Blog";
import { blogs } from "../../page/blogging-page/blogs";
import AuthorImage from "../../assets/CA 3@2x.png";
const BlogDetail = ({ headerHeight }) => {
    const blogDetailContainer = useRef(null);
    const { id } = useParams();
    const currentBlog = blogs.filter((blog) => blog.id === id)[0];
    useEffect(() => {
        blogDetailContainer.current.style.paddingTop = `${headerHeight}px`;
    }, [headerHeight]);
    // useEffect(
    //   () => ,
    //   []
    // );
    return (_jsxs("div", { ref: blogDetailContainer, className: "flex flex-col gap-5 sm:gap-10 px-[30px] md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] mt-10 overflow-visible", children: [_jsx("div", { className: "text-center text-[#6D87F5] font-bold text-xl sm:text-3xl", children: currentBlog?.genre }), _jsx("div", { className: "text-center text-[#2E436A] text-4xl sm:text-6xl font-bold overflow-hidden", children: currentBlog?.title }), _jsx("div", { className: "blog-banner xl:h-[900px] overflow-hidden", children: _jsx("img", { src: currentBlog?.image, alt: "blog main image", className: "w-full" }) }), _jsx("div", { className: "author-likes", children: _jsxs("div", { className: "author flex items-center gap-3", children: [_jsx("div", { className: "author-img", children: _jsx("img", { src: AuthorImage, alt: "blog author photo", className: "w-24 sm:w-32" }) }), _jsxs("div", { className: "flex flex-col text-[#5E5E5E] text-2xl sm:text-4xl", children: [_jsx("div", { className: "font-bold overflow-hidden", children: currentBlog?.author }), _jsx("div", { className: "overflow-hidden", children: currentBlog?.date })] })] }) }), _jsx("main", { dangerouslySetInnerHTML: { __html: currentBlog.blog }, className: "text-justify text-xl sm:text-3xl lg:text-4xl text-[#5E5E5E] overflow-visible" })] }));
};
export default BlogDetail;
