import React from "react";
import { Link } from "react-router-dom";
import hpbg from "../assets/HomePageImages/hpbg.jpg";

const HomePage = () => {
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm"
          style={{
            backgroundImage: `url(${hpbg})`,
          }}
        ></div>

        {/* Container for content with transparent black background */}
        <div className="h-full flex flex-col items-center justify-center relative z-10">
          <div className="bg-black bg-opacity-50 rounded-lg px-8 py-6 text-white text-center border-2 border-red-500">
            <h1 className="text-6xl font-bold mb-5">
              Welcome to Click Fitness!
            </h1>
            <p className="text-3xl font-bold mb-5">
              One stop shop for everything Fitness.
            </p>
            <Link to={"/mainpage"}>
              <button className="text-xl inline-flex items-center justify-center px-4 py-2 bg-slate-700 text-white font-medium rounded-lg transition duration-200 hover:bg-red-500">
                Go to main page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
