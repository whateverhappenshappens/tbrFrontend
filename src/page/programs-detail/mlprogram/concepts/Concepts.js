import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Concepts.css";
import Accordion from "./accordion/Accordion";
const Concepts = () => {
    const accordionData = [
        {
            title: "1. Introduction to Machine Learning",
            content: `Explore its applications, scope, and the current landscape of AI.
      `,
        },
        {
            title: "2. Python Fundamentals",
            content: ` Master basic language features and essential libraries like NumPy and Pandas.
      `,
        },
        {
            title: "3. Math Refresher",
            content: ` Brush up on matrices, vectors, calculus, statistics, and probability.`,
        },
        {
            title: "4.  Supervised Learning - Regression",
            content: `Delve into linear regression and gradient descent.
      `,
        },
        {
            title: "5.  Neural Networks",
            content: ` Understand feed-forward neural networks and backpropagation.`,
        },
        {
            title: "6. PyTorch Basics",
            content: `Learn about Torch tensors, autograd, and training neural networks.`,
        },
        {
            title: "7.  Deployment",
            content: ` Explore API creation, Flask, and hosting applications on Azure App Service/Heroku.`,
        },
    ];
    return (_jsxs("div", { className: "concepts", children: [_jsxs("div", { className: "concepts-headings", children: [_jsx("div", { className: "concepts-head1", children: _jsx("p", { children: "Concepts Covered" }) }), _jsx("a", { href: "https://drive.google.com/file/d/16fUdIxhn4Ky015pdqL_aPMpHjl7IlpjF/view?usp=sharing", target: "_blank", rel: "noopener noreferrer", children: _jsx("div", { className: "concepts-button", children: _jsx("button", { children: "Download Syllabus" }) }) })] }), _jsx("div", { className: "concepts-accordion", children: accordionData.map(({ title, content }) => (_jsx(Accordion, { title: title, content: content }))) })] }));
};
export default Concepts;
