import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Error404 from "../assets/error-404.png";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className=" flex-1 flex flex-col justify-center items-center bg-gray-50 px-4">
        <img className="w-50 h-50 mb-2 mt-9" src={Error404} alt="404 Error" />
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Oops, page not found!
            {/* No Found */}
          </h2>
          <p className="text-gray-600">
            The page you are looking for is not available.
          </p>
        </div>
        <div className="mb-6 flex gap-5">
          <Link
            to="/"
            className="text-black px-8 py-3 rounded-md border cursor-pointer border-black font-semibold hover:opacity-90 transition"
          >
            Back to Home!
          </Link>
          <Link
            to="/Apps"
            className="bg-gradient-to-r from-[#632EE3] cursor-pointer to-[#9F62F2] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Browse Apps
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
