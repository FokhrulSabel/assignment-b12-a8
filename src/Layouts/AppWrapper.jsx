import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import LoadingSpinner from "../Components/LoadingSpinner";
import { Outlet, useLocation } from "react-router";
import Footer from "../Components/Footer";

const AppWrapper = () => {
  const location = useLocation();

  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {showLoader && <LoadingSpinner />}
      <div
        className={`flex-1 transition-opacity duration-300 ${
          showLoader ? "opacity-50" : "opacity-100"
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppWrapper;
