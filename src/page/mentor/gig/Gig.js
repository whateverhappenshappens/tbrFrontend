import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Gig.css";
const Gig = () => {
    const points = [
        {
            point: "TechBairn has brought the best opportunity at your doorsteps!",
        },
        {
            point: "We are seeking for the mentor who will see the hope and ability inside a mentee. If that sounds exactly like what you are then you could be a good fit.",
        },
        {
            point: "We have students from all over the world looking for great instructors who would guide to follow the correct path in their respective profession.",
        },
        {
            point: "Our vast mentor network includes engineers, from leading companies like Google, Facebook, Microsoft, Amazon, Adobe, along with startups and mid-sized enterprises too.",
        },
        {
            point: "Compensation: Generate income by imparting abundant knowledge to the community.As you nurture the community, your skills also flourish in tandem.",
        },
        {
            point: "Expand your network of intellectuals: Contribute to an extensive network of esteemed technical experts and a dynamic, global community of innovators. Broaden your connections with diverse mentors hailing from leading companies across the globe.",
        },
    ];
    return (_jsx("div", { className: "gig", children: _jsxs("div", { className: "content", children: [_jsxs("div", { className: "gig-headings", children: [_jsx("p", { className: "gig-headings-head1", children: "About the Gig" }), _jsxs("p", { className: "gig-headings-head2", children: [_jsx("span", { children: "What Awaits You in the Basket?" }), _jsx("br", {}), _jsx("br", {}), " Discover the chance to elevate your expertise. Rarely do golden opportunities knock, but when they do, seize them without hesitation. Knowledge is the only entity that grows through sharing."] })] }), _jsx("div", { className: "gig-points", children: _jsx("ul", { children: points.map((item, index) => (_jsxs("li", { className: "gig-point", children: [item.point, _jsx("br", {}), _jsx("br", {})] }, index))) }) })] }) }));
};
export default Gig;
