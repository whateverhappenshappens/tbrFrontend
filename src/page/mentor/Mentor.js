import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Mentor.css";
import Enroll from "./enroll/Enroll";
import Gig from "./gig/Gig";
import Experience from "./experience/Experience";
import Faq from "./faq/Faq";
import Help from "./help/Help";
const Mentor = () => {
    return (_jsxs("div", { className: "mentor", children: [_jsx(Enroll, {}), _jsx(Gig, {}), _jsx(Experience, {}), _jsx(Faq, {}), _jsx(Help, {})] }));
};
export default Mentor;
