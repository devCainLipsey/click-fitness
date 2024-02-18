import React from "react";
import mp7 from "../assets/MainPageImages/Section3/mp7.jpg";
import { Link } from "react-router-dom";

const PlanPage5 = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${mp7})` }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-lg border-2 border-red-500 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Outdoor Adventure Training
          </h1>
          <p className="text-3xl text-white mb-6">
            Engage in outdoor adventure training designed to improve overall
            fitness and well-being while enjoying nature. This program combines
            various outdoor activities such as hiking, trail running, rock
            climbing, and bodyweight exercises.
          </p>
          <p className="text-3xl text-white mb-6">
            Equipment Needed: Comfortable workout clothing, hiking shoes,
            backpack, water bottle
          </p>
          <p className="text-3xl text-white mb-2">Duration: 8 weeks</p>
          <p className="text-3xl text-white mb-2">Frequency: 3 days per week</p>
          <p className="text-3xl text-white mb-2">Intensity: Moderate</p>

          <p className="text-3xl text-white mb-2">Price: $20.00</p>
          <Link to="/mainpage#plans">
            <button className="mr-10 bg-slate-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-block mt-4">
              Go Back
            </button>
          </Link>
          <button className="bg-slate-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded inline-block mt-4">
            Buy Plan
          </button>
        </div>
      </div>
    </>
  );
};

export default PlanPage5;
