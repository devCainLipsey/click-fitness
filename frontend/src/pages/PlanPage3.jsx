import React from "react";
import mp5 from "../assets/MainPageImages/Section3/mp5.jpg";
import { Link } from "react-router-dom";

const PlanPage3 = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${mp5})` }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-lg border-2 border-red-500 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Cable Training Program
          </h1>
          <p className="text-3xl text-white mb-6">
            This cable training program is designed for individuals who want to
            build strength, endurance, and muscle definition using cable
            machines. It includes a variety of cable exercises targeting
            different muscle groups for a full-body workout experience.
          </p>
          <p className="text-3xl text-white mb-6">
            Equipment Needed: Cable Machine, Cable Attachments
          </p>
          <p className="text-3xl text-white mb-2">Duration: 10 weeks</p>
          <p className="text-3xl text-white mb-2">
            Frequency: 3-4 days per week
          </p>
          <p className="text-3xl text-white mb-2">
            Intensity: Moderate to High
          </p>
          <p className="text-3xl text-white mb-2">Price: $35.00</p>
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

export default PlanPage3;
