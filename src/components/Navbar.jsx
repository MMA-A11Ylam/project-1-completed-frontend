import React, { useState } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // To get the current active route
  const [token, setToken] = useState(true);
  const [showMenu,setShowMenu] = useState(false)
  // Function to check if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => {
          navigate("/");
        }}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt="Logo"
      />

      <ul className="hidden md:flex items-start gap-5 font-medium">
        <Link to="/">
          <li
            className={`py-1 relative group ${
              isActive("/") ? "text-primary" : ""
            }`}
          >
            HOME
            <hr
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary w-3/5 m-auto transition-all duration-300 ${
                isActive("/") ? "block" : "hidden"
              } group-hover:block`}
            />
          </li>
        </Link>

        <Link to="/doctors">
          <li
            className={`py-1 relative group ${
              isActive("/doctors") ? "text-primary" : ""
            }`}
          >
            ALL DOCTORS
            <hr
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary w-3/5 m-auto transition-all duration-300 ${
                isActive("/doctors") ? "block" : "hidden"
              } group-hover:block`}
            />
          </li>
        </Link>

        <Link to="/about">
          <li
            className={`py-1 relative group ${
              isActive("/about") ? "text-primary" : ""
            }`}
          >
            ABOUT
            <hr
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary w-3/5 m-auto transition-all duration-300 ${
                isActive("/about") ? "block" : "hidden"
              } group-hover:block`}
            />
          </li>
        </Link>

        <Link to="/contact">
          <li
            className={`py-1 relative group ${
              isActive("/contact") ? "text-primary" : ""
            }`}
          >
            CONTACT
            <hr
              className={`absolute bottom-0 left-0 right-0 h-0.5 bg-primary w-3/5 m-auto transition-all duration-300 ${
                isActive("/contact") ? "block" : "hidden"
              } group-hover:block`}
            />
          </li>
        </Link>
      </ul>

      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              className="w-8 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
            />
            <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden" src={assets.menu_icon} alt="" />
        {/* mobile menu */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition` }>
          <div className="flex items-center justify-between py-6 px-5">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium" >
            <Link onClick={() => setShowMenu(false)} className="py-2 px-4 rounded inline-block" to="/">Home</Link>
            <Link onClick={() => setShowMenu(false)} className="py-2 px-4 rounded inline-block" to="/doctors">All Doctors</Link>
            <Link onClick={() => setShowMenu(false)} className="py-2 px-4 rounded inline-block" to="/about">About</Link>
            <Link onClick={() => setShowMenu(false)} className="py-2 px-4 rounded inline-block" to="/contact">Contact</Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
