import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Concepts.css";
import Accordion from "./accordion/Accordion";
const Concepts = () => {
    const accordionData = [
        {
            title: "1. HTML",
            content: `Introduction about HTML, Recommended w3c structure for HTML page,Heading fonts(H1-H6), creating a list, attaching links, creating form and tables,adding images.`,
        },
        {
            title: "2. CSS",
            content: `What is CSS? Selectors, how many types of CSS usage are there , Basic Styling, Relative & Absolute, Media Query, Responsive Design, Bootstrap.`,
        },
        {
            title: "3. Git & Github",
            content: `Introduction about Git & Github, Add, Merge, Checkout, Github - Create Repo, remote addition.`,
        },
        {
            title: "4. JAVASCRIPT(ES 6+)",
            content: `Introduction to JS, Place Javascript Code, Defining Variables, Functions and Scope, Types of JavaScript,Functions Explained, Functions, Object Literals and the 'this' Keyword, Array.`,
        },
        {
            title: "5. NODE.JS",
            content: `Simple Server, Routing, API Authentication, Map, Rest, forEach, reduce, set timeout, Async functions, Callback >>> Promises >>> async-await, Introduction on Express, Make a call from frontend to server, Express Params and Query String, Express Middleware.`,
        },
        {
            title: "6. DATABASE",
            content: `What is Database? Types of Database, SQL/No-SQL, What is Mongo, JSON/BSON, Mongo Structure, Architecture, Integration, Atlas, What is _id, CRUD with MongoDB Atlas from CMD.`,
        },
        {
            title: "7. REACT",
            content: `Introduction on React,Component Architecture,Single Page Application,SASS Idea, Redux,Hooks.`,
        },
    ];
    return (_jsxs("div", { className: "concepts", children: [_jsxs("div", { className: "concepts-headings", children: [_jsx("div", { className: "concepts-head1", children: _jsx("p", { children: "Concepts Covered" }) }), _jsx("div", { className: "concepts-button", children: _jsx("a", { href: "https://drive.google.com/file/d/1QoO7P71ANEbz_NqveGHESJVt2fgfj80x/view?usp=sharing", target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { children: "Download Syllabus" }) }) })] }), _jsx("div", { className: "concepts-accordion", children: accordionData.map(({ title, content }) => (_jsx(Accordion, { title: title, content: content }))) })] }));
};
export default Concepts;
