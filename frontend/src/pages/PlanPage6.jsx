import React from "react";
import mp8 from "../assets/MainPageImages/Section3/mp8.jpg";
import { Link } from "react-router-dom";

const PlanPage6 = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${mp8})` }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-lg border-2 border-red-500 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Personal Trainer Program
          </h1>
          <p className="text-3xl text-white mb-6">
            This personalized training program is designed and supervised by our
            certified personal trainers to help you achieve your fitness goals
            efficiently. Whether you want to lose weight, build muscle, or
            improve overall fitness, our trainers will create a customized
            workout plan tailored to your needs and abilities.
          </p>
          <p className="text-3xl text-white mb-6">
            Equipment Needed: Varies based on personalized plan
          </p>
          <p className="text-3xl text-white mb-2">Duration: Customized</p>
          <p className="text-3xl text-white mb-2">Frequency: Varies</p>
          <p className="text-3xl text-white mb-2">Intensity: Personalized</p>
          <p className="text-3xl text-white mb-2">Price: Varies</p>
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

export default PlanPage6;
