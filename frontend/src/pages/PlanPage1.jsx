import React from "react";
import mp3 from "../assets/MainPageImages/Section3/mp3.jpg";
import { Link } from "react-router-dom";

const PlanPage1 = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${mp3})` }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-lg border-2 border-red-500 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Advanced Strength Training
          </h1>
          <p className="text-3xl text-white mb-6">
            This advanced strength training program is designed for individuals
            looking to maximize muscle growth and strength gains. It includes a
            combination of compound exercises, isolation exercises, and
            progressive overload techniques.
          </p>
          <p className="text-3xl text-white mb-6">
            Equipment Needed: Barbell, Dumbbells, Squat Rack, Bench Press,
            Pull-Up Bar
          </p>
          <p className="text-3xl text-white mb-2">Duration: 12 weeks</p>
          <p className="text-3xl text-white mb-2">Frequency: 4 days per week</p>
          <p className="text-3xl text-white mb-2">Intensity: High</p>

          <p className="text-3xl text-white mb-2">Price: $30.00</p>
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

export default PlanPage1;
