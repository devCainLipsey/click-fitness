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

// SVG icon for previous arrow
const PrevArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-12 w-12 text-white cursor-pointer absolute top-1/2 -left-28 transform -translate-y-1/2 z-10 ${props.className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={props.onClick}
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
    className={`h-12 w-12 text-white cursor-pointer absolute top-1/2 -right-28 transform -translate-y-1/2 z-10 ${props.className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    onClick={props.onClick}
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
        <div className="absolute bottom-0 left-0 right-0 bg-black -p-6">
          <h3 className="text-xl font-bold">Plan 1</h3>
          <p className="text-gray-700">Description of Plan 1</p>
          <button className="mt-2 bg-slate-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Details
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp4} alt="Program 2" className="h-96 object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black -p-6">
          <h3 className="text-xl font-bold">Plan 2</h3>
          <p className="text-gray-700">Description of Plan 2</p>
          <button className="mt-2 bg-slate-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Details
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp5} alt="Program 3" className="h-96 object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black -p-6">
          <h3 className="text-xl font-bold">Plan 3</h3>
          <p className="text-gray-700">Description of Plan 3</p>
          <button className="mt-2 bg-slate-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Details
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp6} alt="Program 4" className="h-96 object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black -p-6">
          <h3 className="text-xl font-bold">Plan 4</h3>
          <p className="text-gray-700">Description of Plan 4</p>
          <button className="mt-2 bg-slate-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Details
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp7} alt="Program 5" className="h-96 object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black -p-6">
          <h3 className="text-xl font-bold">Plan 5</h3>
          <p className="text-gray-700">Description of Plan 5</p>
          <button className="mt-2 bg-slate-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Details
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="mb-4">
          <img src={mp8} alt="Program 6" className="h-96 object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-black -p-6">
          <h3 className="text-xl font-bold">Plan 6</h3>
          <p className="text-gray-700">Description of Plan 6</p>
          <button className="mt-2 bg-slate-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Details
          </button>
        </div>
      </div>
    </Slider>
  );
};

export default ImageSlider;
