import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mp3 from "../assets/MainPageImages/Section3/mp3.jpg";
import mp4 from "../assets/MainPageImages/Section3/mp4.jpg";
import mp5 from "../assets/MainPageImages/Section3/mp5.jpg";
import mp6 from "../assets/MainPageImages/Section3/mp6.jpg";
import mp7 from "../assets/MainPageImages/Section3/mp7.jpg";
import mp8 from "../assets/MainPageImages/Section3/mp8.jpg";
import { Link } from "react-router-dom";

// SVG icon for previous arrow
const PrevArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-20  w-20 text-white cursor-pointer absolute  top-52 -left-32 transform -translate-y-1/2 z-10 ${props.className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={props.onClick}
    style={{ transition: "color 0.3s" }}
    // Hover effect
    onMouseEnter={(e) => e.target.setAttribute("stroke", "#EF4444")}
    onMouseLeave={(e) => e.target.setAttribute("stroke", "currentColor")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

// SVG icon for next arrow
const NextArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-20  w-20 text-white cursor-pointer absolute top-52 -right-32 transform -translate-y-1/2 z-10 ${props.className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={props.onClick}
    style={{ transition: "color 0.3s" }}
    // Hover effect
    onMouseEnter={(e) => e.target.setAttribute("stroke", "#EF4444")}
    onMouseLeave={(e) => e.target.setAttribute("stroke", "currentColor")}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const ImageSlider = () => {
  const settings = {
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="relative">
        <div className="mb-4">
          <img src={mp3} alt="Program 1" className="h-96 object-cover" />
        </div>
        <div className="bg-black">
          <h3 className="text-4xl font-bold">Advanced Strength</h3>
          <Link to="/programpage1">
            <button className="mt-6 bg-slate-700 hover:bg-red-600 text-white text-xl font-bold py-3 px-6 rounded transition duration-200">
              Details
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp4} alt="Program 2" className="h-96 object-cover" />
        </div>
        <div className=" bg-black">
          <h3 className="text-4xl font-bold">Squat Mastery</h3>
          <Link to="/programpage2">
            <button className="mt-6 bg-slate-700 hover:bg-red-600 text-white text-xl font-bold py-3 px-6 rounded transition duration-200">
              Details
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp5} alt="Program 3" className="h-96 object-cover" />
        </div>
        <div className="bg-black ">
          <h3 className="text-4xl font-bold">Cable Training</h3>
          <Link to="/programpage3">
            <button className="mt-6 bg-slate-700 hover:bg-red-600 text-white text-xl font-bold py-3 px-6 rounded transition duration-200">
              Details
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp6} alt="Program 4" className="h-96 object-cover" />
        </div>
        <div className="bg-black ">
          <h3 className="text-4xl font-bold">Bodyweight Strength</h3>
          <Link to="/programpage4">
            <button className="mt-6 bg-slate-700 hover:bg-red-600 text-white text-xl font-bold py-3 px-6 rounded transition duration-200">
              Details
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp7} alt="Program 5" className="h-96 object-cover" />
        </div>
        <div className="bg-black ">
          <h3 className="text-4xl font-bold">Outdoor Adventure Training</h3>
          <Link to="/programpage5">
            <button className="mt-6 bg-slate-700 hover:bg-red-600 text-white text-xl font-bold py-3 px-6 rounded transition duration-200">
              Details
            </button>
          </Link>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp8} alt="Program 6" className="h-96 object-cover" />
        </div>
        <div className="bg-black ">
          <h3 className="text-4xl font-bold">Personal Trainer</h3>
          <Link to="/programpage6">
            <button className="mt-6 bg-slate-700 hover:bg-red-600 text-white text-xl font-bold py-3 px-6 rounded transition duration-200">
              Details
            </button>
          </Link>
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;
