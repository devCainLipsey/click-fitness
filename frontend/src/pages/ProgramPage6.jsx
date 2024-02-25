import React, { useState } from "react";
import mp8 from "../assets/MainPageImages/Section3/mp8.jpg";
import { Link } from "react-router-dom";
import ConfirmOverlayModule from "../components/ConfirmOverlayModule";

const PlanPage6 = () => {
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

export default PlanPage6;
