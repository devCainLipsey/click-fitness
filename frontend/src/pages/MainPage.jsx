import React from "react";
import NavBar from "../components/NavBar";
import ImageSlider from "../components/ImageSlider";
import ContactForm from "../components/ContactForm";
import mp1 from "../assets/MainPageImages/Section1/mp1.jpg";
import mp2 from "../assets/MainPageImages/Section2/mp2.jpg";
import mp9 from "../assets/MainPageImages/Section4/mp9.jpg";

const MainPage = () => {
  return (
    <>
      <NavBar />
      <section className="relative min-h-screen" id="home">
        <div
          className="absolute inset-0 bg-black opacity-90"
          style={{
            backgroundImage: `url(${mp1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-6xl md:text-6xl font-bold">Build your Body!</h1>
            <p className="mt-4 text-2xl md:text-2xl">
              Some description about your app
            </p>
          </div>
        </div>
      </section>
      <section
        className="min-h-screen flex justify-end items-center py-12 border-t-2 border-red-500 bg-black"
        id="about"
      >
        {/* Content for the second section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <div className="text-white text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold">
                About Click Fitness
              </h1>
              <p className="mt-4 text-lg md:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={mp2}
              alt="About Click Fitness"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section
        className="min-h-screen py-12 border-t-2 border-red-500 bg-black flex justify-center items-center relative"
        id="plans"
      >
        {/* Content for the third section */}
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold pb-3 mt-24 absolute top-0 left-0 right-0">
            Our Programs
          </h1>
          <ImageSlider />
        </div>
      </section>
      <section
        className="flex justify-center items-center min-h-screen py-12 border-t-2 border-red-500 bg-black"
        style={{ backgroundImage: `url(${mp9})`, backgroundSize: "cover" }}
        id="contact"
      >
        {/* Content for the fourth section */}
        <div className="container mx-auto ">
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default MainPage;
