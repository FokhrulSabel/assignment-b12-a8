import React from "react";
import GooglePlay from "../assets/googlePlay.png";
import AppStore from "../assets/appStore.png";
import HeroImage from "../assets/hero.png";

const Banner = () => {
  return (
    <div className="mt-[50px]">
      {/* top banner */}
      <div>
        <div>
          <h1 className="text-3xl md:text-5xl text-black font-bold text-center">
            We Build
            <br />
            <span className="text-[#632EE3]">Productive</span> Apps
          </h1>
          <p className="text-[#627382] text-[16px] text-center mt-4 p-5">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.
            <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>
        {/* Button */}
        <div className="flex gap-4 justify-center items-center mt-8">
          <a
            href="https://play.google.com/store/apps?hl=en"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-[#95999c] bg-white rounded-[4px] font-bold hover:bg-gray-300 transition"
          >
            <img src={GooglePlay} alt="GooglePlay" className="w-5 h-5" />
            Google Play
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-2 border border-[#95999c] bg-white rounded-[4px] font-bold hover:bg-gray-300 transition"
          >
            <img src={AppStore} alt="App Store" className="w-5 h-5" />
            App Store
          </a>
        </div>
        {/* Big Mobile Image */}
        <img
          className="mt-[40px] w-full max-w-3xl mx-auto p-6 object-contain"
          src={HeroImage}
          alt="Hero"
        />
      </div>
      {/* state cards */}
      

      <div className="card py-10 lg:py-20 " >
        <div className="w-full lg:w-8/12 px-5 mx-auto text-white  ">
          <h2 className="text-5xl leading-snug font-bold text-center">
            Trusted by Millions, Built for You
          </h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="companyCard flex flex-col items-center py-10 rounded-2xl shadow-2xl hover:-translate-y-1.5 transition-transform duration-300">
              <p className="text-lg">Total Downloads</p>
              <h2 className="text-[64px] font-extrabold">29.6M</h2>
              <p>21% More Than Last Month</p>
            </div>

            
            <div className="companyCard flex flex-col items-center py-10 rounded-2xl shadow-2xl hover:-translate-y-1.5 transition-transform duration-300">
              <p className="text-lg">Total Reviews</p>
              <h2 className="text-[64px] font-extrabold">906K</h2>
              <p>46% more than last month</p>
            </div>

            
            <div className="companyCard flex flex-col items-center py-10 rounded-2xl shadow-2xl hover:-translate-y-1.5 transition-transform duration-300">
              <p className="text-lg">Active Apps</p>
              <h2 className="text-[64px] font-extrabold">132+</h2>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
