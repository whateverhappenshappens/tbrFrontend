import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import "../../../styles/components/FeedbackScroll.css";
import FeedbackImg from "../../../assets/CA 3@2x.png";
// import SlideImg from "../../../assets/incredible-major-steampunk-balloon-floating-water-surface-illustrations-generative-ai.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogs } from "../blogs";
const FeedbackScroll = () => {
    const navigate = useNavigate();
    const settings = {
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    };
    const handleBlogClick = (id) => {
        navigate(`/blog/${id}`);
    };
    return (_jsx("div", { className: "feedback-scroll", children: _jsx(Slider, { ...settings, className: "slider", children: blogs.slice(0, 5).map((blog) => (_jsxs("div", { className: "feedback-scroll-card", onClick: () => handleBlogClick(blog.id), children: [_jsx("div", { className: "feedback-scroll-img-div", children: _jsx("img", { src: blog.image, alt: "" }) }), _jsxs("div", { className: "feedback-scroll-content-div", children: [_jsx("h6", { className: "feedback-scroll-content-div-Technology-text", children: blog.genre }), _jsx("h1", { className: "feedback-scroll-content-div-extraordinary-text", children: blog.title }), _jsx("p", { className: "feedback-scroll-content-div-extraordinary-text-description", children: blog.summary }), _jsx("div", { className: "my", children: _jsxs("div", { className: "feedback-scroll-content-div-owner-content", children: [_jsx("img", { src: FeedbackImg, alt: "", className: "feedback-scroll-content-div-owner-content-img" }), _jsxs("div", { className: "feedback-scroll-content-div-owner-content-details", children: [_jsx("p", { className: "name", children: blog.author }), _jsx("p", { children: blog.date })] })] }) })] })] }))) }) }));
};
export default FeedbackScroll;
