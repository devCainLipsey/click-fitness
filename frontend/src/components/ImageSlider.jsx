import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
        {
          img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Advanced Strength",
          link: "/programpage1",
        },
        {
          img: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Squat Mastery",
          link: "/programpage2",
        },
        {
          img: "https://images.unsplash.com/photo-1597452485677-d661670d9640?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Cable Training",
          link: "/programpage3",
        },
        {
          img: "https://images.unsplash.com/photo-1598971457999-ca4ef48a9a71?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Bodyweight Strength",
          link: "/programpage4",
        },
        {
          img: "https://images.unsplash.com/photo-1599115086667-c134c829edb6?q=80&w=2645&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Outdoor Adventure Training",
          link: "/programpage5",
        },
        {
          img: "https://images.unsplash.com/photo-1652363723312-83cbc77e2d34?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Personal Trainer",
          link: "/programpage6",
        },
      ].map((program, index) => (
        <div key={index} className="relative h-96">
          <Link to={program.link}>
            <img
              src={program.img}
              alt={program.title}
              className="w-full h-full object-cover opacity-100 md:hover:opacity-30 md:transition-opacity md:duration-100"
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
