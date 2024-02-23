import React, { useState } from "react";

const ConfirmOverlayModule = ({ show, onCancel }) => {
  const [purchaseConfirmed, setPurchaseConfirmed] = useState(false);

  if (!show) return null;

  const handleConfirmPurchase = () => {
    setPurchaseConfirmed(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-black border-4 border-red-500 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-4xl font-bold text-center text-white mb-4">
          {purchaseConfirmed
            ? "Thank you for your Purchase!"
            : "Confirm Purchase"}
        </h2>
        <div className="flex justify-center">
          {purchaseConfirmed ? ( // If purchase is confirmed, render only the Cancel button
            <button
              className="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded"
              onClick={onCancel}
            >
              Cancel
            </button>
          ) : (
            // If purchase is not confirmed, render both buttons
            <>
              <button
                className="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded mr-4"
                onClick={onCancel}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-4 rounded"
                onClick={handleConfirmPurchase}
              >
                Buy Plan
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConfirmOverlayModule;
