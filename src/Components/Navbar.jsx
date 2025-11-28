import React from "react";
import { Link, NavLink } from "react-router";
import GitHub from "../assets/github-logo.png";
import Hero from "../assets/logo.png";

const Navbar = () => {
  return (
    <div >
      <div className="navbar bg-base-100 shadow-sm">
        <div className="w-full lg:w-full lg:px-8 mx-auto flex items-center justify-between py-3">
          <div className="navbar-start">
            {/* dropdown section */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#9F62F2] border font-semibold"
                        : "text-black"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Apps"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#9F62F2] border font-semibold"
                        : "text-black"
                    }
                  >
                    Apps
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Installation"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#9F62F2] border font-semibold"
                        : "text-black"
                    }
                  >
                    Installation
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Logo*/}
            <Link
              to="/"
              className="flex items-center gap-2 btn btn-ghost text-xl"
            >
              <img src={Hero} alt="Logo" className="w-8 h-8" />
              <span className="text-[#9F62F2] font-bold">APPS.LO</span>
            </Link>
          </div>

          {/* Middle NavLink */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#9F62F2] border font-semibold"
                      : "text-black"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Apps"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#9F62F2] border font-semibold"
                      : "text-black"
                  }
                >
                  Apps
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Installation"
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#9F62F2] border font-semibold"
                      : "text-black"
                  }
                >
                  Installation
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Nav Right Side */}
          <div className="navbar-end">
            <a
              href="https://github.com/FokhrulSabel"
              target="_blank"
              className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-[4px] font-semibold text-[18px] py-5"
            >
              <img src={GitHub} alt="Logo" className="w-5 h-5 rounded-full" />{" "}
              Contribute
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
