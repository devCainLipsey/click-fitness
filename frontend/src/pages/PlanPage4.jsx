import React from "react";
import mp6 from "../assets/MainPageImages/Section3/mp6.jpg";
import { Link } from "react-router-dom";

const PlanPage4 = () => {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${mp6})` }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-lg border-2 border-red-500 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Bodyweight Strength Program
          </h1>
          <p className="text-3xl text-white mb-6">
            This bodyweight strength program is designed for individuals who
            want to build muscle and improve their strength using only their
            bodyweight. It includes a variety of calisthenics exercises such as
            push-ups, pull-ups, squats, lunges, and planks to develop a strong
            and functional physique.
          </p>
          <p className="text-3xl text-white mb-6">
            No equipment is needed for this program. It can be done anywhere,
            anytime, making it perfect for those who prefer training at home or
            while traveling.
          </p>
          <p className="text-3xl text-white mb-2">Duration: 8 weeks</p>
          <p className="text-3xl text-white mb-2">Frequency: 3 days per week</p>
          <p className="text-3xl text-white mb-2">
            Intensity: Moderate to High
          </p>
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

export default PlanPage4;
