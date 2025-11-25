import React from "react";
import Logo from "../../assets/logo.png";

import { MdOutlineHome } from "react-icons/md";
import { IoMdAppstore } from "react-icons/io";
import { GrInstallOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
// import { CiHome } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="shadow bg-white py-1">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Apps</a>
              </li>

              <li>
                <a>Installation</a>
              </li>
            </ul>
          </div>
          <a href="">
            <div className="flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-8 h-8" />
              <h2 className="text-xl text-secondary uppercase font-semibold ">
                HERO
                <span>.IO</span>
              </h2>
            </div>
          </a>
          {/* <a className="btn btn-ghost text-xl">HERO.IO</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <li>
              <a className="text-gray-500 font-semibold active" href="">
                <MdOutlineHome size={18} />
                Home
              </a>
            </li>

            <li>
              <a className="text-gray-500 font-semibold active" href="">
                <IoMdAppstore size={18} />
                Apps
              </a>
            </li>

            <li>
              <a className="text-gray-500 font-semibold active" href="">
                <GrInstallOption size={18} />
                Installation
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {/* <a className=" btn btn-secondary bg-gradient-to-r from-violate-500 to-blue-500"><FaGithub />Contribute</a> */}
          <button className="btn bg-gradient-to-r from-violet-600 to-blue-500 text-white rounded-lg shadow-lg hover:from-violet-700 hover:to-blue-600 border-none">
            <FaGithub className="w-5 h-5 mr-2" />
            Contribute
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
