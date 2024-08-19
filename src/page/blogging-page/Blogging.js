import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import "../../styles/pages/Blogging.css";
import BloggingHeader from "./blogging-header/BloggingHeader";
import FeedbackScroll from "./feedback-scroll/FeedbackScroll";
import BloggingCard from "./blogging-card/BloggingCard";
import BloggingFooter from "./blogging-footer/BloggingFooter";
const Blogging = ({ headerHeight }) => {
    const bloggingContainer = useRef(null);
    useEffect(() => {
        bloggingContainer.current.style.paddingTop = `${headerHeight}px`;
    }, [headerHeight]);
    return (_jsxs("div", { ref: bloggingContainer, className: "blogging-page", children: [_jsx(BloggingHeader, {}), _jsx(FeedbackScroll, {}), _jsx(BloggingCard, {}), _jsx(BloggingFooter, {})] }));
};
export default Blogging;
