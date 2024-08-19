import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import "./Program.css";
import FridaySale from "./black-friday-sale/FridaySale";
import Development from "./development-box/Development";
import Course from "./course-container/Course";
const Programs = () => {
    const [value, setValue] = useState("all");
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    return (_jsxs("div", { className: "mentor", children: [_jsx(FridaySale, {}), _jsx(Development, { value: [value, setValue] }), _jsx(Course, { value: value })] }));
};
export default Programs;
