import React, { useEffect, useState } from "react";
import useAppData from "../Hooks/useAppData";
import Cards from "../Components/Cards";
import { Link, useLocation } from "react-router";
import LoadingSpinner from "../Components/LoadingSpinner";

const Apps = () => {
  const { apps, loading, error } = useAppData();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setSearchQuery("");
    setFilteredApps(apps);
  }, [apps, location]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    setSearchLoading(true);

    setTimeout(() => {
      const filtered = apps.filter((app) =>
        app.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredApps(filtered);
      setSearchLoading(false);
    }, 500);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <p className="text-center mt-10">Failed to Load data.</p>;

  return (
    <div className="bg-gray-100 py-10">
      {/* Top Section */}
      <div className="p-3">
        <h2 className="text-3xl font-bold text-center mb-2">
          Our All Applications
        </h2>
        <p className="sm:text-[16px] text-center text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      {/* Left Side */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-2 gap-4 p-5">
        <p className="font-bold text-[#001931]">
          ({filteredApps.length}) Apps Found
        </p>
        {/* Right Search Section */}
        <div className="relative w-full md:w-1/2">
          <input
            className="border border-black rounded-md px-4 py-2 w-full pr-10"
            type="text"
            placeholder="Search apps..."
            value={searchQuery}
            onChange={handleSearch}
          />

          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setFilteredApps(apps);
              }}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {searchLoading ? (
        <LoadingSpinner />
      ) : filteredApps.length > 0 ? (
        <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredApps.map((app) => (
            <Cards key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-10">
          <p className="text-center text-gray-500 font-medium text-4xl mb-4">
            No Apps Found
          </p>
          <Link
            to="/Apps"
            className="bg-indigo-600 text-white px-6 py-3 mt-4 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Show All Apps
          </Link>
        </div>
      )}
    </div>
  );
};

export default Apps;
