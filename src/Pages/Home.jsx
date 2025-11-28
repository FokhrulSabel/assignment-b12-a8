import React from "react";
import useAppData from "../Hooks/useAppData";
import Cards from "../Components/Cards";
import { Link } from "react-router";
import Banner from "../Components/Banner";

const Home = () => {
  const { apps } = useAppData();

  const featuredApps = apps.slice(0, 8);

  return (
    <>
      <Banner />
      {/* Card Top Section */}
      <div className="bg-gray-100 py-10">
        <h2 className="text-3xl font-bold text-center mb-5">Trending Apps</h2>
        <p className="text-center mb-8">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredApps.map((app) => (
            <Cards key={app.id} app={app} />
          ))}
        </div>
        {/* Card Bottom Section Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/apps"
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-20 py-2 rounded-md font-semibold hover:opacity-90"
          >
            Show All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
