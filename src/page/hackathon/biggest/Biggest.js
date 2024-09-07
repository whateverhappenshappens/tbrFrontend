import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Biggest.css";
import { Link } from "react-router-dom";

const Biggest = ({ ActiveData }) => {
  console.log(ActiveData);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    _jsx("div", {
      className: "biggest-hackathon-carousel overflow-visible",
      children: _jsx(Slider, {
        ...settings,
        children: ActiveData && Array.isArray(ActiveData) ? (
          ActiveData.map((data, index) => (
            _jsx(
              "div",
              {
                className: "biggest-hackathon-slide",
                children: _jsxs("div", {
                  className: "biggest-hackathon",
                  children: [
                    _jsxs("div", {
                      className: "biggest-hackathon-text",
                      children: [
                        _jsx("p", {
                          className:
                            "biggest-hackathon-text-large visbyroundCF extrabold",
                          children: data.heading,
                        }),
                        _jsx("p", {
                          className:
                            "biggest-hackathon-text-small visbyroundCF medium",
                          children: data.description,
                        }),
                        _jsx(Link, {
                          to: `/events/${data.id}`,
                          children: _jsx("button", {
                            className:
                              "biggest-hackathon-button visbyroundCF bold",
                            children: _jsx("p", { children: "Enroll Now" }),
                          }),
                        }),
                      ],
                    }),
                    _jsxs("div", {
                      className: "biggest-hackathon-img",
                      children: [
                        _jsx("p", {
                          className: "image-para visbyroundCF extrabold",
                          children: data.heading,
                        }),
                        // Updated the img src to use bannerLinkPC
                        _jsx("img", {
                          src: data?.bannerLinkPC,
                          alt: "Hackathon Banner",
                        }),
                      ],
                    }),
                  ],
                }),
              },
              index
            )
          ))
        ) : (
          _jsx("p", { children: "Loading..." })
        ),
      }),
    })
  );
};

export default Biggest;
