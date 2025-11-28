import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Download from "../assets/icon-downloads.png";
import Rating from "../assets/icon-ratings.png";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps") || "[]");
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    toast.success("App Uninstalled Successfully!");
  };

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    const sortedApps = [...installedApps].sort((a, b) => {
      if (order === "high-low") return b.downloads - a.downloads;
      if (order === "low-high") return a.downloads - b.downloads;
      return 0;
    });

    setInstalledApps(sortedApps);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-5">
      <h2 className="text-3xl font-bold text-center mb-2">
        Your Installed Apps
      </h2>
      <p className="text-center mb-4 text-gray-600">
        Explore All Trending Apps on the Market developed by us
      </p>

      <div className="flex justify-between items-center mb-4 px-2">
        <p className="font-semibold text-gray-700">
          {installedApps.length} Apps Found
        </p>
        {installedApps.length > 0 && (
          <select
            className="border border-gray-300 rounded-md px-4 py-2"
            value={sortOrder}
            onChange={handleSort}
          >
            <option value="">Sort by Downloads</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        )}
      </div>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-10">
          You have no installed apps yet.
        </p>
      ) : (
        <div className="grid gap-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div className="flex flex-col">
                  <h3 className="font-bold text-lg">{app.title}</h3>
                  <div className="flex gap-4 text-gray-600 text-sm mt-1">
                    <div className="flex items-center gap-1">
                      <img src={Download} alt="Downloads" className="w-4 h-4" />
                      <span>{app.downloads}M</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <img src={Rating} alt="Rating" className="w-4 h-4" />
                      <span>{app.ratingAvg}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span>
                        {app.size}
                        <span className="text-red-500">MB</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-red-600 hover:bg-red-500  text-white px-4 py-2 rounded-md font-semibold transition text-2xl max-sm:text-sm"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallation;
