import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LuShoppingCart } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav>
      <div
        className={`navbar lg:px-12 lg:pb-7 ${
          pathname === "/" ? "bg-[#9538E2] text-white" : ""
        }`}
      >
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-double underline-offset-4"
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-double underline-offset-4"
                    : ""
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <Link
            to={"/"}
            className="transition duration-700 ease-in-out hover:scale-110 hover:font-medium text-xl"
          >
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-12">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-double underline-offset-4" : ""
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline decoration-double underline-offset-4" : ""
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end lg:space-x-4">
          <span className="lg:text-2xl">
            <LuShoppingCart />
          </span>
          <span className="lg:text-2xl">
            <FaRegHeart />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
