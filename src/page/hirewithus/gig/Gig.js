import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Gig.css";
const Gig = () => {
    const points = [
        {
            point: "The tech landscape is constantly evolving, and companies need skilled individuals who can keep pace. At TechBairn, we don't just train individuals, we cultivate well-rounded professionals equipped with the latest in-demand skills like web development, machine learning, and competitive coding.      ",
        },
        {
            point: "Our diverse pool of graduates are prepared to tackle any challenge and become valuable assets to your team.",
        },
        {
            point: "Ready to build your dream team? Browse our talented graduates and find the perfect fit for your company's needs.",
        },
        {
            point: "Happy Hiring!        ",
        },
    ];
    return (_jsx("div", { className: "gig", children: _jsxs("div", { className: "content", children: [_jsx("div", { className: "gig-headings", children: _jsx("p", { className: "gig-headings-head1", children: "About the Gig" }) }), _jsx("div", { className: "gig-points", children: _jsx("ul", { children: points.map((item, index) => (_jsxs("li", { className: "gig-point", children: [item.point, _jsx("br", {})] }, index))) }) })] }) }));
};
export default Gig;
