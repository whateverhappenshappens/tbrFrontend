// import "../../styles/components/Alumni.css";

import techbairn_logo from "../../assets/Logo.svg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Alumni = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="alumni mt-10 bg-[#2E436A] px-[30px] py-10 lg:py-24 md:pl-[70px] md:pr-[60px] xl:pl-[140px] xl:pr-[100px] flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-5">
      <div className="box1 flex flex-col lg:items-center lg:justify-center lg:text-left text-white text-center w-full lg:w-5/12">
        <div className="font-bold text-5xl md:text-7xl xl:text-8xl lg:w-full overflow-hidden">
          Our Alumni work at
        </div>
        <div className="text-2xl md:text-4xl xl:text-5xl overflow-hidden">
          Here we will showcase all big companies where our students got placed
        </div>
      </div>
      <div className="box2 rounded-xl md:hidden">
        <Slider {...settings}>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="company-card bg-[#102245] p-32 rounded-xl">
              <img src={techbairn_logo} alt="company" className="m-auto" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="box2-no-slider hidden md:flex flex-wrap lg:w-7/12 items-center justify-center gap-10">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="company-card bg-[#102245] p-32 lg:p-20 xl:p-44 rounded-xl w-5/12"
          >
            <img src={techbairn_logo} alt="company" className="m-auto" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alumni;
