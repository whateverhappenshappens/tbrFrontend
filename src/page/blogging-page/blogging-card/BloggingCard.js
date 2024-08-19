import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import "../../../styles/components/BloggingCard.css";
import Card from "./card/Card";
import user1 from "../../../assets/CA 3@2x.png";
import { blogs } from "../blogs";
const BloggingCard = () => {
    const [showAll, setShowAll] = useState(false);
    const handleToggleShow = () => {
        setShowAll((prevShowAll) => !prevShowAll);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (_jsxs("div", { className: "bloggingcard", children: [blogs.slice(0, showAll ? blogs.length : 3).map((blog) => (_jsx(Card, { id: blog.id, cardimg: blog.image, para: blog.genre, cardheading: blog.title, description: blog.summary, img: user1, name: blog.author, date: blog.date, body: blog.blog }, blog.id))), _jsx("button", { className: "toggle-btn", onClick: handleToggleShow, children: showAll ? "Show Less" : "Read More" })] }));
};
export default BloggingCard;
