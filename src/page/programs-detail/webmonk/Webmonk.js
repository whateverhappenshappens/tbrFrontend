import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import "./Webmonk.css";
import Details from "./details/Details";
import Overview from "./overview/Overview";
import Projects from "./projects/Projects";
import Roadmap from "./roadmap/Roadmap";
import Certificate from "./certificate/Certificate";
import Concepts from "./concepts/Concepts";
import Instructor from "./instructor/Instructor";
import StudentSaying from "./studentssaying/StudentSaying";
import Faq from "./faq/Faq";
import Help from "./help/Help";
const Webmonk = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);
    return (_jsxs("div", { className: "programs", children: [_jsx(Details, { star: 4, rating: 4999, students: 10000 }), _jsx(Roadmap, {}), _jsx(Overview, {}), _jsx(Projects, {}), _jsx(Concepts, {}), _jsx(Certificate, {}), _jsx(Instructor, {}), _jsx(StudentSaying, {}), _jsx(Faq, {}), _jsx(Help, {})] }));
};
export default Webmonk;
