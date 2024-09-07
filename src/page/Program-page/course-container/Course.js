import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from "react";
import "./Course.css";
import Card from "./course-card/Card";
import banner1 from "../../../assets/Mask Group 5@2x.png";
import banner2 from "../../../assets/Mask Group 6@2x.png";
import banner3 from "../../../assets/Mask Group 7@2x.png";
import banner4 from "../../../assets/ai-cloud-concept-with-robot-arm.png";
const Course = ({ value }) => {
    const [show, setShow] = useState({
        all: true,
        web: true,
        ml: true,
        code: true,
        iot: true,
    });
    const handleFilter = (value) => {
        if (value === "all") {
            setShow({
                all: true,
                web: true,
                ml: true,
                code: true,
                iot: true,
            });
        }
        else if (value === "web") {
            setShow({
                all: false,
                web: true,
                ml: false,
                code: false,
                iot: false,
            });
        }
        else if (value === "ml") {
            setShow({
                all: false,
                web: false,
                ml: true,
                code: false,
                iot: false,
            });
        }
        else if (value === "code") {
            setShow({
                all: false,
                web: false,
                ml: false,
                code: true,
                iot: false,
            });
        }
        else if (value === "iot") {
            setShow({
                all: false,
                web: false,
                ml: false,
                code: false,
                iot: true,
            });
        }
    };
    // Call the handleFilter function when value changes
    React.useEffect(() => {
        handleFilter(value);
    }, [value]);
    return (_jsxs("div", { className: "course-choise-box", children: [show.web && (_jsx(Card, { heading: "Webmonk", para1: "A Complete MERN Stack Program ", teachername: "Mr.Lavesh Gaurav", image: banner1, link: "/course/webmonk", id: "webmonk" })), show.ml && (_jsx(Card, { heading: "Machinester", para1: " A Complete Machine Learning Program ", teachername: "Mr.Shashank Shekhar", image: banner2, link: "/course/machinester", id: "machinester" })), show.iot && (_jsx(Card, { heading: "IOT", para1: "A Complete Internet of Things course with data analytics. ", teachername: "Mr.Siddharth Bhatter", image: banner3, link: "/course/IOT", id: "iot" })), show.code && (_jsx(Card, { heading: "CodeSlayer", para1: " A Competitive Programming Course.", teachername: "Mr.Shashank Pathak", image: banner4, link: "/course/codeslayer", id: "code-slayer" }))] }));
};
export default Course;
