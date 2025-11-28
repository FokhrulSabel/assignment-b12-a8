import React from "react";
import Hero from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="sm:footer-horizontal bg-[#001931] text-neutral-content p-6">
      <div className="w-full lg:max-w-6xl lg:px-8 mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        {/* Left Side */}
        <aside className="flex items-center gap-2">
          <img src={Hero} alt="Logo" className="w-8 h-8 rounded-full" />
          <p className="text-white text-xl font-bold">HERO.IO</p>
        </aside>
        {/* Right Side/Social Link */}
        <nav>
          <h6 className="text-2xl text-white font-semibold">Social Links</h6>
          <div className=" mt-4 grid grid-flow-col gap-4">
            <a href="https://x.com/Fokhrul_Sabel?t=zYr248ZvP48IFbX1FKu1wg&s=09" className="bg-white rounded-full p-1.5 text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M18.244 2H21.5l-7.5 8.57L22 22h-5.805l-4.366-5.684L6.79 22H3.5l7.99-9.13L2 2h5.922l3.988 5.288L18.244 2zm-1.02 17h1.418L8.87 4.94H7.337L17.224 19z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/fokhrulsabel/"
              target="_blank"
              className="bg-white rounded-full p-1.5 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M4.983 3.5C4.983 5.018 3.85 6 2.427 6 1.014 6 0 5.018 0 3.5S1.014 1 2.427 1C3.85 1 4.983 1.982 4.983 3.5zM.27 8h4.31v15.5H.27V8zM8.906 8h4.136v2.104h.06c.577-1.094 1.987-2.248 4.086-2.248 4.366 0 5.168 2.847 5.168 6.553V23.5h-4.31v-8.352c0-1.992-.04-4.556-2.776-4.556-2.78 0-3.203 2.171-3.203 4.414V23.5H8.906V8z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/fokhrul.sabel.2024/"
              target="_blank"
              className="bg-white rounded-full p-1.5 text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </div>
      <div className="w-full lg:max-w-6xl lg:px-8 mx-auto">
        <hr className="border-gray-600 my-3 w-full lg:max-w-6xl lg:px-8 mx-auto" />
      </div>

      <div>
        <p className="text-white text-[16px] text-center mt-3">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
