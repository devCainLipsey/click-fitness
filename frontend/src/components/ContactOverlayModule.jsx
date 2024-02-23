import React from "react";

const ContactOverlayModule = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center   bg-black bg-opacity-75 z-50">
      <div className="bg-black p-8 border-2 border-red-500 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-500">
          Message Sent!
        </h2>
        <p className="text-lg mb-4">We will get back to you soon.</p>
        <button
          className="bg-slate-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ContactInputModule = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-black p-8 border-2 border-red-500 rounded shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4 ">
          Please Fill Out <span className="text-red-500">All</span> Fields!
        </h2>
        <button
          className="bg-slate-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </div>
  );
};

export { ContactOverlayModule, ContactInputModule };
