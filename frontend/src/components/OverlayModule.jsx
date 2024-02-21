// OverlayModule.jsx
import React from "react";

const OverlayModule = ({ show, onConfirmPurchase, onCancel }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      <div className="w-3/4 md:w-1/2 lg:w-1/3 bg-black border-4 border-red-500 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-4xl font-bold text-center text-white mb-4">
          Confirm Purchase
        </h2>
        <div className="flex justify-between">
          <button
            className="bg-red-500 hover:bg-red-700 text-white text-xl font-bold py-2 px-4 rounded"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white text-xl font-bold py-2 px-4 rounded"
            onClick={onConfirmPurchase}
          >
            Buy Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverlayModule;
