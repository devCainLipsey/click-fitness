import React, { useState } from "react";
import mp7 from "../assets/MainPageImages/Section3/mp7.jpg";
import { Link } from "react-router-dom";
import ConfirmOverlayModule from "../components/ConfirmOverlayModule";

const PlanPage5 = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleConfirmPurchase = () => {
    setShowConfirmation(false);
    // Logic after confirming the purchase
    console.log("Purchase Confirmed");
  };

  const handleCancelPurchase = () => {
    setShowConfirmation(false);
    // Logic after cancelling the purchase
    console.log("Purchase Cancelled");
  };

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
            <button className="mr-10 bg-slate-700 hover:bg-red-600 text-white text-xl  font-bold py-3 px-6 rounded inline-block mt-4 transition duration-200">
              Go Back
            </button>
          </Link>
          <button
            className="bg-slate-700 hover:bg-red-600 text-white text-xl  font-bold py-3 px-6 rounded inline-block mt-4 transition duration-200"
            onClick={() => setShowConfirmation(true)}
          >
            Buy Plan
          </button>
          <ConfirmOverlayModule
            show={showConfirmation}
            onConfirmPurchase={handleConfirmPurchase}
            onCancel={handleCancelPurchase}
          />
        </div>
      </div>
    </>
  );
};

export default PlanPage5;
