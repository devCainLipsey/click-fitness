import React, { useState } from "react";
import ConfirmOverlayModule from "../components/ConfirmOverlayModule";

const PlanPage1 = () => {
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
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
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

export default PlanPage1;
