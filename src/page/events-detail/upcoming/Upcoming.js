import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./Upcoming.css";
import { AiOutlineRight } from "react-icons/ai";

const Upcoming = (props) => {
  console.log(props.data);
  // const [enroll, setEnroll] = useState<boolean>(false);
  // useEffect(() => {
  //   if (props.data.isActive === "true") {
  //     setEnroll(!enroll);
  //   }
  // }, []);

  const arr = new Array(5);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = i;
  }
  console.log(props.data?.isActive);

  return (
    _jsx("div", {
      className: "upcoming",
      children: _jsxs("div", {
        className: "upcoming-content",
        children: [
          _jsxs("div", {
            className: "upcoming-info",
            children: [
              _jsxs("div", {
                className: "upcoming-links",
                children: [
                  _jsx("a", {
                    href: "http://",
                    children: _jsx("p", { children: "Events" }),
                  }),
                  _jsx(AiOutlineRight, { size: 15, color: "white" }),
                  _jsx("a", {
                    href: "http://",
                    children: _jsx("p", { children: "Upcoming Event 1" }),
                  }),
                ],
              }),
              _jsxs("div", {
                className: "upcoming-paragraphs",
                children: [
                  _jsx("p", {
                    className: "upcoming-paragraphs-para1",
                    children: props.data?.heading,
                  }),
                  _jsx("p", {
                    className: "upcoming-paragraphs-para3",
                    children: props.data?.subHeading,
                  }),
                ],
              }),
              _jsx("div", {
                className: "upcoming-ratings",
                children: _jsx("div", {
                  className: "upcoming-stars",
                  children: _jsx("p", { children: "10K+ Students" }),
                }),
              }),
              _jsxs("div", {
                className: "upcoming-date",
                children: [
                  _jsxs("p", {
                    children: [
                      "Date :",
                      " ",
                      new Date(props.data?.date).toLocaleString("en-US", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }),
                      " ",
                    ],
                  }),
                  _jsxs("p", {
                    children: [
                      "Time :",
                      " ",
                      new Date(props.data?.date).toLocaleString("en-US", {
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      }),
                      " ",
                    ],
                  }),
                  _jsx("p", { children: "Mode : Online" }),
                ],
              }),
              props.data?.isActive &&
                _jsx("div", {
                  className: "upcoming-buttons",
                  children: _jsx("button", {
                    className: "enroll-btn upcoming-buttons-enroll",
                    children: _jsx("p", { children: "Enroll Now" }),
                  }),
                }),
            ],
          }),
          _jsxs("div", {
            className: "upcoming-img",
            children: [
              _jsxs("div", {
                className: "upcoming-links-2",
                children: [
                  _jsx("a", {
                    href: "http://",
                    children: _jsx("p", { children: "Events" }),
                  }),
                  _jsx(AiOutlineRight, { size: 15, color: "white" }),
                  _jsx("a", {
                    href: "http://",
                    children: _jsx("p", { children: "Upcoming Event 1" }),
                  }),
                ],
              }),
              _jsx("p", {
                className: "upcoming-paragraphs-para1-1",
                children: props.data?.heading,
              }),
              // Updated the img src to use bannerLinkPC
              _jsx("img", {
                src: props.data?.bannerLinkPC,
                alt: "Event Banner",
              }),
              _jsxs("button", {
                className: "speaker-btn",
                children: ["Ashutosh", _jsx("br", {}), "Co-Founder @TechBairn"],
              }),
            ],
          }),
        ],
      }),
    })
  );
};

export default Upcoming;
