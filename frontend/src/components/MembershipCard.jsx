import React from "react";
import { Link } from "react-router-dom";
import { CiDumbbell } from "react-icons/ci";

const MembershipCard = ({ title, description, price, link }) => {
  return (
    <div className="max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg border border-red-500 bg-transparent flex flex-col justify-center items-center p-12">
      <div className="flex justify-center items-center w-full h-24 bg-transparent">
        <CiDumbbell className="text-8xl text-red-500" />
      </div>
      <div className="px-8 py-6">
        <div className="font-bold text-4xl text-center mb-4">{title}</div>
        <p className="text-gray-400 text-xl text-center">{description}</p>
        <div className="text-center mt-6">
          <p className="text-red-500 font-bold text-2xl">${price}/Month</p>
        </div>
      </div>
      <div className="flex justify-center pb-8">
        <Link to={link}>
          <button className="bg-slate-700 hover:bg-red-600 text-white text-2xl font-bold py-3 px-8 rounded transition duration-200">
            Plan Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MembershipCard;
