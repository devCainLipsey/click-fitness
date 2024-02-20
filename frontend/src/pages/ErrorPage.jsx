import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-b from-black to-gray-700">
        <div className="bg-black bg-opacity-50 rounded-lg px-8 py-6 text-white text-center border-2 border-red-500">
          <h1 className="text-4xl mb-4">
            An <span className="text-red-500">Error</span> Occurred!
          </h1>
          <p className="text-lg">Could not find this page.</p>
          <p className="text-lg">
            Please click the button to go back to the main page.
          </p>
          <Link to={"/mainpage"}>
            <button className=" mt-6 inline-flex items-center justify-center px-4 py-2 bg-slate-700 hover:bg-red-600  font-medium rounded-lg">
              Go to main page
            </button>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
