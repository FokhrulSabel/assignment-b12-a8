import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAppData from "../Hooks/useAppData";
import { toast } from "react-hot-toast";
import AppError from "../assets/App-Error.png";
import Download from "../assets/icon-downloads.png";
import Rating from "../assets/icon-ratings.png";
import Review from "../assets/icon-review.png";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Details = () => {
  const Navigate = useNavigate();
  const { id } = useParams();
  const { apps, loading } = useAppData();

  const [selectedApp, setSelectedApp] = useState(undefined); // undefined = loading stage
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (apps && apps.length > 0) {
      const app = apps.find((a) => a.id === parseInt(id));
      setSelectedApp(app);

      const installedApps = JSON.parse(
        localStorage.getItem("installedApps") || "[]"
      );
      setInstalled(installedApps.some((a) => a.id === app?.id));
    }
  }, [apps, id]);

  const handleInstall = () => {
    if (!selectedApp) return;

    const installedApps = JSON.parse(
      localStorage.getItem("installedApps") || "[]"
    );

    if (!installedApps.some((a) => a.id === selectedApp.id)) {
      installedApps.push(selectedApp);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
      setInstalled(true);

      toast.success(`${selectedApp.title} Installed Successfully!`);
    }
  };

  // if (loading || selectedApp === undefined) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen">
  //       <p className="text-lg font-medium">Loading App...</p>
  //     </div>
  //   );
  // }

  if (selectedApp === undefined) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium">Loading App...</p>
      </div>
    );
  }

  if (!selectedApp) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <img
          src={AppError}
          alt="App Not Found"
          className="w-40 h-40 object-contain mb-6"
        />
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          OOPS!! APP NOT FOUND
        </h2>
        <p className="text-gray-600 text-center mb-2 text-sm">
          The app you are looking for does not exist in our system.
        </p>
        <button
          onClick={() => Navigate("/apps")}
          className="bg-[#9F62F2] text-white px-8 py-2 rounded-md font-semibold hover:bg-indigo-700 transition"
        >
          Go Back!
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-6 rounded-lg shadow-md">
        <img
          src={selectedApp.image}
          alt={selectedApp.title}
          className="w-60 h-60 object-contain"
        />
        <div className="flex-1 space-y-3">
          <h2 className="text-3xl font-bold">{selectedApp.title}</h2>
          <p className="text-gray-600">
            Developed by{" "}
            <span className="text-[#632EE3]">{selectedApp.companyName}</span>
          </p>

          <div className="flex gap-6 text-gray-700 font-medium">
            <div className="flex flex-col items-center">
              <img src={Download} alt="Downloads" className="w-6 h-6 mb-1" />
              <span className="text-sm">Downloads</span>
              <span className="text-3xl font-bold">
                {selectedApp.downloads}M+
              </span>
            </div>

            <div className="flex flex-col items-center">
              <img src={Rating} alt="Rating" className="w-6 h-6 mb-1" />
              <span className="text-sm">Average Ratings</span>
              <span className="text-3xl font-bold">
                {selectedApp.ratingAvg}
              </span>
            </div>

            <div className="flex flex-col items-center">
              <img src={Review} alt="Reviews" className="w-6 h-6 mb-1" />
              <span className="text-sm">Total Reviews</span>
              <span className="text-3xl font-bold">{selectedApp.reviews}K</span>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`px-6 py-2 rounded-md text-white font-semibold ${
              installed ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {installed ? "Installed" : `Install Now (${selectedApp.size}MB)`}
          </button>
        </div>
      </div>

      {/* Ratings Chart */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md w-full">
        <h3 className="text-2xl font-semibold mb-4">Ratings</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={selectedApp.ratings}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#4F46E5" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-3">Description</h3>
        <p className="text-gray-700 leading-relaxed">
          {selectedApp.description}
        </p>
      </div>
    </div>
  );
};

export default Details;
