import React from "react";
import NavBar from "../components/NavBar";
import ImageSlider from "../components/ImageSlider";
import mp1 from "../assets/MainPageImages/Section1/mp1.jpg";
import mp2 from "../assets/MainPageImages/Section2/mp2.jpg";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <section className="relative min-h-screen">
        <div
          className="absolute inset-0 bg-black opacity-50"
          style={{
            backgroundImage: `url(${mp1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-4xl md:text-6xl font-bold">Build your Body!</h1>
            <p className="mt-4 text-lg md:text-xl">
              Some description about your app
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-screen flex justify-end items-center py-12 border-t-2 border-red-500 bg-black">
        {/* Content for the second section */}
        <div className="container mx-auto text-white flex flex-col-reverse md:flex-row md:justify-between md:items-center">
          <div className="w-full md:w-1/2 md:mr-12">
            <p className="text-xl pb-10">About Click Fitness</p>
            <h1 className="text-5xl">Welcome!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              animi minus quibusdam perspiciatis facere tenetur perferendis
              expedita nihil! Magni nihil accusamus velit rerum corrupti minus
              ipsam alias delectus sapiente eveniet?
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src={mp2} alt="Image" className="w-full" />
          </div>
        </div>
      </section>
      <section className="min-h-screen py-12 border-t-2 border-red-500 bg-black flex justify-center items-center relative">
        {/* Content for the third section */}
        <div className="container mx-auto text-center">
          <h1 className="text-5xl pb-3 mt-24 absolute top-0 left-0 right-0">
            Our Programs
          </h1>
          <ImageSlider />
        </div>
      </section>
      <section className="py-12 border-t-2 border-red-500 bg-black">
        {/* Content for the fourth section */}
        <div className="container mx-auto">
          <h1>SECTION 4</h1>
        </div>
      </section>
    </>
  );
};

export default MainPage;
