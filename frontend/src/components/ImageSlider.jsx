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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
      {/* Each slide */}
      {[
        { img: mp3, title: "Advanced Strength", link: "/programpage1" },
        { img: mp4, title: "Squat Mastery", link: "/programpage2" },
        { img: mp5, title: "Cable Training", link: "/programpage3" },
        { img: mp6, title: "Bodyweight Strength", link: "/programpage4" },
        {
          img: mp7,
          title: "Outdoor Adventure Training",
          link: "/programpage5",
        },
        { img: mp8, title: "Personal Trainer", link: "/programpage6" },
      ].map((program, index) => (
        <div key={index} className="relative h-96">
          <Link to={program.link}>
            <img
              src={program.img}
              alt={program.title}
              className="w-full h-full object-cover opacity-100 hover:opacity-30 transition-opacity duration-100"
              style={{ height: "100%" }}
            />
          </Link>
          <div className="bg-black text-center mt-5">
            <h3 className="text-4xl font-bold">{program.title}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
