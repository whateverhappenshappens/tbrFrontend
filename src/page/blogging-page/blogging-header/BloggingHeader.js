import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../../../styles/components/BloggingHeader.css";
import header from "../../../assets/Group 399.svg";
import { FaSearch, FaArrowRight } from "react-icons/fa";
const BloggingHeader = () => {
    return (_jsxs("div", { className: "blogging-page-header", children: [_jsx("div", { className: "blogging-page-header-img", children: _jsx("img", { src: header, alt: "header" }) }), _jsxs("div", { className: "blogging-page-header-search-box", children: [_jsx("div", { className: "blogging-page-header-search-box-search-icon", children: _jsx(FaSearch, {}) }), _jsx("input", { type: "search", id: "search", name: "search", placeholder: "Search" }), _jsx("div", { className: "blogging-page-header-search-box-arrow-icon", children: _jsx(FaArrowRight, {}) })] })] }));
};
export default BloggingHeader;
