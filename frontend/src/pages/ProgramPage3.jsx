import React, { useState } from "react";
import ConfirmOverlayModule from "../components/ConfirmOverlayModule";

const PlanPage3 = () => {
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
          backgroundImage: `url("https://images.unsplash.com/photo-1597452485677-d661670d9640?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
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

export default PlanPage3;
