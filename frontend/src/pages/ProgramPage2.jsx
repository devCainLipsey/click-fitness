import React, { useState } from "react";
import mp4 from "../assets/MainPageImages/Section3/mp4.jpg";
import { Link } from "react-router-dom";
import OverlayModule from "../components/OverlayModule";

const PlanPage2 = () => {
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
        style={{ backgroundImage: `url(${mp4})` }}
      >
        <div className="bg-black bg-opacity-70 p-8 rounded-lg border-2 border-red-500 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Squat Mastery Program
          </h1>
          <p className="text-3xl text-white mb-6">
            This advanced squat mastery program is designed for individuals
            looking to develop exceptional lower body strength and power through
            squats. It includes a variety of squat variations, plyometric
            exercises, and accessory movements to enhance squat performance and
            overall leg development.
          </p>
          <p className="text-3xl text-white mb-6">
            Equipment Needed: Barbell, Squat Rack, Weight Plates, Resistance
            Bands
          </p>
          <p className="text-3xl text-white mb-2">Duration: 8 weeks</p>
          <p className="text-3xl text-white mb-2">Frequency: 3 days per week</p>
          <p className="text-3xl text-white mb-2">
            Intensity: Moderate to High
          </p>

          <p className="text-3xl text-white mb-2">Price: $25.00</p>
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
          <OverlayModule
            show={showConfirmation}
            onConfirmPurchase={handleConfirmPurchase}
            onCancel={handleCancelPurchase}
          />
        </div>
      </div>
    </>
  );
};

export default PlanPage2;
