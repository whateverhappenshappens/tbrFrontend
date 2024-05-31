// import { NavLink } from "react-router-dom";
// import events_img from "../../assets/events.png";
// import "./Events.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

// import "../campus-associate/experience/Experience.css";

import growth from "../../assets/growth-graph.png";

interface Props {
  activedata: any;
}

const Events: React.FC<Props> = ({ activedata }) => {
  // const cardsData = [
  //   {
  //     color: "#2FD18C",
  //     heading: "Web Development webinar",
  //     para: "A small one two lines about the webinar",
  //     image: growth,
  //   },
  //   {
  //     color: "#2FD18C",
  //     heading: "Web Development webinar",
  //     para: "A small one two lines about the webinar",
  //     image: growth,
  //   },
  //   {
  //     color: "#2FD18C",
  //     heading: "Web Development webinar",
  //     para: "A small one two lines about the webinar",
  //     image: growth,
  //   },
  //   {
  //     color: "#2FD18C",
  //     heading: "Web Development webinar",
  //     para: "A small one two lines about the webinar",
  //     image: growth,
  //   },
  //   {
  //     color: "#2FD18C",
  //     heading: "Web Development webinar",
  //     para: "A small one two lines about the webinar",
  //     image: growth,
  //   },
  // ];
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          prevArrow: <div className="prev-arrow">&#10094;</div>,
          nextArrow: <div className="next-arrow">&#10095;</div>,
        },
      },
    ],
  };
  return (
    <div className="events py-[50px] md:pl-[70px] md:pr-[60px] xl:my-20">
      <h1 className="text-[#2E436A] text-center mb-10 text-5xl md:text-7xl font-extrabold overflow-hidden xl:pl-[140px] xl:pr-[100px]">
        Events
      </h1>
      {/* <div className="card">
        <div className="details">
          <div className="title">All India Biggest Web Dev Hackathon</div>
          <div className="subtitle">
            Join India's biggest Web Dev Hackathon and be a part of something
            grand! Earn exciting goodies on winning.
          </div>
          <NavLink to="/">Enroll Now</NavLink>
        </div>
        <div className="image">
          <img src={events_img} alt="events boy" />
        </div>
      </div> */}
      <div className="xl:pl-[140px] xl:pr-[100px]">
        <Slider {...settings} className="px-[30px] text-[#2E436A]">
          {activedata?.map((card, index) => (
            <div key={index} className="border rounded-2xl p-10">
              <div className="w-full h-full flex flex-col gap-5">
                <div
                  className="rounded-xl h-1/2 p-10"
                  style={{ backgroundColor: card.color }}
                >
                  <img
                    src={growth}
                    alt={card.heading}
                    className="w-4/12 m-auto"
                  />
                </div>
                <div className="h-1/2 md:flex md:flex-col md:gap-5">
                  <p className="vr-bold font-bold text-4xl md:text-5xl overflow-hidden">
                    {card.heading}
                  </p>
                  <div className="vr-regular text-3xl md:text-4xl overflow-hidden">
                    {card.subHeading}
                  </div>
                </div>
                <div className="vr-bold text-4xl font-bold overflow-hidden">
                  Speaker Name
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Events;
