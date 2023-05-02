import { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full bg-[#D16315] shadow">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href="#" className="flex gap-5 items-center">
              <img src={Logo} className="w-20" alt="Logo" />
              <h2 className="text-4xl text-white">The Burger Lab</h2>
            </a>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <AiOutlineClose className="text-white text-4xl" />
                ) : (
                  <AiOutlineMenu className="text-white text-4xl" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center transition-all ease-in justify-center space-y-8 grid grid-cols-1 md:flex md:space-x-6 md:space-y-0 text-white text-4xl">
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#8B4513] p-2 rounded-md"
                    : ""
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Menu
              </NavLink>
              <NavLink
                to="/locations"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Locations
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                About
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
