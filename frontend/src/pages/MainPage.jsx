import React from "react";
import NavBar from "../components/NavBar";
import mp1 from "../assets/MainPageImages/Section1/mp1.jpg";
import mp2 from "../assets/MainPageImages/Section2/mp2.jpg";
import mp3 from "../assets/MainPageImages/Section3/mp3.jpg";
import mp4 from "../assets/MainPageImages/Section3/mp4.jpg";
import mp5 from "../assets/MainPageImages/Section3/mp5.jpg";
import mp6 from "../assets/MainPageImages/Section3/mp6.jpg";
import mp7 from "../assets/MainPageImages/Section3/mp7.jpg";
import mp8 from "../assets/MainPageImages/Section3/mp8.jpg";

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
            <p className="pb-10">About Click Fitness</p>
            <h1 className="text-4xl">Welcome!</h1>
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
      <section className="min-h-screen py-12 border-t-2 border-red-500 flex justify-center items-center">
        {/* Content for the third section */}
        <div className="container mx-auto text-center">
          <h1 className="text-4xl pb-3">Our Programs</h1>
          <div className="flex justify-center items-center">
            <div className="w-1/6 mx-4">
              <img src={mp3} alt="Program 1" className="w-full" />
            </div>
            <div className="w-1/6 mx-4">
              <img src={mp4} alt="Program 2" className="w-full" />
            </div>
            <div className="w-1/6 mx-4">
              <img src={mp5} alt="Program 3" className="w-full" />
            </div>
            <div className="w-1/6 mx-4">
              <img src={mp6} alt="Program 4" className="w-full" />
            </div>
            <div className="w-1/6 mx-4">
              <img src={mp7} alt="Program 5" className="w-full" />
            </div>
            <div className="w-1/6 mx-4">
              <img src={mp8} alt="Program 6" className="w-full" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 border-t-2 border-red-500">
        {/* Content for the fourth section */}
        <div className="container mx-auto">
          <h1>SECTION 4</h1>
        </div>
      </section>
    </>
  );
};

export default MainPage;
