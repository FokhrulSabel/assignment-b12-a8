import React from "react";
import downloadImage from "../assets/icon-downloads.png";
import ratingImage from "../assets/icon-ratings.png";
import { Link } from "react-router";

const Cards = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app;

  return (
    <Link
      to={`/apps/${id}`}
      className="bg-white p-5 rounded-md shadow-md hover:scale-105 transition-transform"
    >
      {/* Card Design/Card Layout */}
      <img className="h-40 w-full object-contain mb-3" src={image} alt={title} />
      <h2 className="font-bold text-xl mb-2 text-left">{title}</h2>
      <div className="flex justify-between text-sm">
        <div className="flex gap-1 items-center bg-green-100 px-2 rounded">
          <img className="w-4" src={downloadImage} alt="Downloads" />
          <span>{downloads}M</span>
        </div>
        <div className="flex gap-1 items-center bg-orange-100 px-2 rounded">
          <img className="w-4" src={ratingImage} alt="Rating" />
          <span>{ratingAvg}</span>
        </div>
      </div>
    </Link>
  );
};

export default Cards;