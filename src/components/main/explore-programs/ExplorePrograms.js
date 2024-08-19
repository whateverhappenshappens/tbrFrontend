import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "../../../styles/components/ExplorePrograms.css";
import { NavLink } from "react-router-dom";
// import { useRef } from "react";
const ExplorePrograms = () => {
    // const programCard = useRef();
    // const programCardLogoBG = useRef();
    // const programCardLogoFG = useRef();
    return (_jsxs("div", { className: "explore-programs", children: [_jsxs("div", { className: "main", children: [_jsxs("div", { className: "name", children: [_jsx("h1", { children: "Explore program by categories" }), _jsx("p", { children: "Get top on-demand courses from our list of courses" })] }), _jsx(NavLink, { className: "explore-btn", to: "/programs", children: "View all" })] }), _jsxs("div", { className: "programs", children: [_jsxs("div", { className: "program-card one", children: [_jsx("div", { className: "logo", children: _jsx("span", { children: "</>" }) }), _jsxs("div", { className: "details", children: [_jsx("h2", { children: "Codeslayer" }), _jsx("p", { children: "A Placement Preparation Program" })] })] }), _jsxs("div", { className: "program-card two", children: [_jsx("div", { className: "logo", children: _jsx("span", { children: "</>" }) }), _jsxs("div", { className: "details", children: [_jsx("h2", { children: "Webmonk" }), _jsx("p", { children: "Full Stack Web Development Program" })] })] }), _jsxs("div", { className: "program-card three", children: [_jsx("div", { className: "logo", children: _jsx("span", { children: "</>" }) }), _jsxs("div", { className: "details", children: [_jsx("h2", { children: "Machinester" }), _jsx("p", { children: "A complete Machine Learning Program" })] })] }), _jsxs("div", { className: "program-card one", children: [_jsx("div", { className: "logo", children: _jsx("span", { children: "</>" }) }), _jsxs("div", { className: "details", children: [_jsx("h2", { children: "IOT" }), _jsx("p", { children: "A complete Internet of Things Program" })] })] })] })] }));
};
export default ExplorePrograms;
