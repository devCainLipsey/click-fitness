import React from "react";
import { Link } from "react-scroll";
import NavBar from "../components/NavBar";
import ImageSlider from "../components/ImageSlider";
import MembershipCard from "../components/MembershipCard";
import ContactForm from "../components/ContactForm";
import SocialMediaIcons from "../components/SocialMediaIcons";

const HomePage = () => {
  const basicMembershipCardData = {
    title: (
      <>
        <p className="text-4xl">
          <span className="text-blue-400">Basic</span> Membership
        </p>
      </>
    ),
    description: "Access to basic features",
    price: "30",
    link: "/basic",
  };

  const premiumMembershipCardData = {
    title: (
      <>
        <p className="text-4xl">
          <span className="text-purple-400">Premium</span> Membership
        </p>
      </>
    ),
    description: "Access to premium features",
    price: "50",
    link: "/premium",
  };

  const vipMembershipCardData = {
    title: (
      <>
        <p className="text-4xl">
          <span className="text-yellow-400">VIP</span> Membership
        </p>
      </>
    ),
    description: "Access to VIP features",
    price: "100",
    link: "/vip",
  };

  return (
    <>
      <NavBar />
      {/* Content for the 1st section */}
      <section className="relative min-h-screen" id="home">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"), linear-gradient(rgba(0, 0, 0, 10), rgba(0, 0, 0, 10))`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center">
            <h1
              className="text-8xl md:text-8xl font-bold"
              style={{ textShadow: "5px 5px 5px #000" }}
            >
              Build your Body
            </h1>
            <p
              className="mt-6 text-3xl md:text-3xl"
              style={{ textShadow: "2px 2px 2px #000" }}
            >
              Achieve your goals to a stronger, healthier you!
            </p>
            <Link
              to="programs"
              spy={true}
              smooth={true}
              offset={-80}
              duration={700}
            >
              <button className="mt-8 border-2 border-red-500 bg-black text-white  text-2xl font-bold py-4 px-8 rounded-xl hover:bg-red-700 hover:border-gray-950 transition duration-200">
                Check out our Programs
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        className="min-h-screen flex justify-end items-center py-12 border-t-4 border-red-500 bg-black"
        id="about"
      >
        {/* Content for the 2nd section */}
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <div className="text-white text-center md:text-left">
              <h1 className="text-6xl font-bold mb-20">About Click Fitness</h1>
              <p className="text-lg sm:mb-6 md:text-xl">
                Welcome to Click Fitness, your ultimate destination for building
                a stronger, healthier you! Our app provides a comprehensive
                platform designed to empower you on your fitness journey.
                Whether you're a beginner or a seasoned fitness enthusiast, we
                offer personalized programs tailored to your goals and
                preferences. Explore our wide range of programs, from strength
                training to outdoor adventures, and take the first step towards
                a fitter, happier lifestyle. Join us today and start sculpting
                the body you've always dreamed of!
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1591227174835-d3705c881c90?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="About Click Fitness"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
      <section
        className="min-h-screen py-12 border-t-4 border-red-500 bg-black flex justify-center items-center relative"
        id="programs"
      >
        {/* Content for the 3rd section */}
        <div className="container mx-auto text-center">
          <h1 className="text-6xl font-bold pb-3 absolute top-20 left-0 right-0">
            Programs
          </h1>
          <ImageSlider />
        </div>
      </section>

      <section
        className="min-h-screen py-12 border-t-4 border-red-500 bg-black relative flex flex-col justify-center items-center"
        id="plans"
      >
        {/* Content for the 4th section */}
        <h1 className="text-6xl text-center font-bold pb-3 absolute xl:top-0 -top-10 left-0 right-0 mt-24">
          Memberships
        </h1>
        <div className="flex flex-col items-center mt-32">
          {/* Updated classes for responsive design */}
          <div className="xl:flex flex-col sm:flex-row xl:items-center xl:space-x-8">
            <MembershipCard {...basicMembershipCardData} />
            <MembershipCard {...premiumMembershipCardData} />
            <MembershipCard {...vipMembershipCardData} />
          </div>
        </div>
      </section>

      <section
        className="flex justify-center items-center min-h-screen py-12 border-t-4 border-red-500 bg-black"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1534258936925-c58bed479fcb?q=80&w=2531&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          backgroundSize: "cover",
        }}
        id="contact"
      >
        {/* Content for the 5th section */}
        <div className="container mx-auto">
          <ContactForm />
          <SocialMediaIcons />
        </div>
      </section>
    </>
  );
};

export default HomePage;
