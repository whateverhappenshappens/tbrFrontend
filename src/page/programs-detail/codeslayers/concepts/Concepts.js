import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Concepts.css";
import Accordion from "./accordion/Accordion";
const Concepts = () => {
    const accordionData = [
        {
            title: "1. C++ Fundamentals",
            content: `Introduction to c++ control flow , Functions`,
        },
        {
            title: "2. Data Structures – 1",
            content: `Linked List, Stacks, Queues, Graphs,Trees, Heaps – sets, priority queues`,
        },
        {
            title: "3. Oops",
            content: `Structures, Objects & classes, Pointers, Inheritance`,
        },
        {
            title: "4. Competitive Maths",
            content: `Prime Numbers, Permutations and Combination, GCD, Number Theory, Probability, Modular Arithmetic`,
        },
        {
            title: "5. Algorithms",
            content: `Searching, Sorting, Hashing, Greedy, DFS, BFS, Recursion, Divide and Conquer, Dynamic Programming`,
        },
        {
            title: "6. Game Theory",
            content: `Gaining knowledge on advance Game Theory`,
        },
        {
            title: "7. Time and Space Complexity",
            content: `Time and Space complexity of different algorithmic functions
      `,
        },
        {
            title: "8. Some Binary Stuffs",
            content: `Binary Tree , Binary search tree and more with proper understanding
      `,
        },
    ];
    return (_jsxs("div", { className: "concepts", children: [_jsxs("div", { className: "concepts-headings", children: [_jsx("div", { className: "concepts-head1", children: _jsx("p", { children: "Concepts Covered" }) }), _jsx("div", { className: "concepts-button", children: _jsx("a", { href: "https://drive.google.com/file/d/1OseXuScYsS0n2X3I_n8UHstEFBbuLlAj/view?usp=sharing", target: "_blank", rel: "noopener noreferrer", children: _jsx("button", { children: "Download Syllabus" }) }) })] }), _jsx("div", { className: "concepts-accordion", children: accordionData.map(({ title, content }) => (_jsx(Accordion, { title: title, content: content }))) })] }));
};
export default Concepts;
