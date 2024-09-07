import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./ProjectsCard.css";
import story from "../../../../../assets/yourstory1.png";
const ProjectsCard = (props) => {
    return (_jsxs("div", { className: "project-card", children: [_jsx("div", { className: "project-card-rectangle", children: _jsx("img", { src: story, alt: "" }) }), _jsxs("div", { className: "project-card-content", children: [_jsx("div", { className: "project-card-content-heading", children: _jsx("p", { className: " vr-bold", children: props.heading }) }), _jsx("div", { className: "project-card-content-paragraph", children: _jsx("p", { className: "vr-medium", children: props.paragraph }) }), _jsx("div", { className: "project-card-content-button", children: _jsx("button", { children: _jsx("p", { className: "vr-bold", children: "" }) }) })] })] }));
};
export default ProjectsCard;
