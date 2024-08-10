import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Suitmedia_Logo.webp";

const Navigationbar = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <section
      className={`fixed w-full z-50 transition-transform duration-300 ${
        scrollingUp ? "translate-y-0" : "-translate-y-16"
      }`}
    >
      <nav
        className={`w-full px-4 py-4 flex justify-between items-center bg-orange-600 shadow-md ${
          scrollingUp ? "bg-opacity-80" : "bg-opacity-100"
        }`}
      >
        <div className="text-xl font-bold text-white">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
        </div>
        <ul className="flex space-x-8">
          <li>
            <Link
              to="/#"
              className={`${
                location.pathname === "/"
                  ? " border-b-2 border-white"
                  : "text-white"
              } hover:text-blue-500 transition-colors duration-300`}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/ideas"
              className={`${
                location.pathname === "/about"
                  ? " border-b-2 border-white"
                  : "text-white"
              } hover:text-blue-500 transition-colors duration-300`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/ideas"
              className={`${
                location.pathname === "/services"
                  ? " border-b-2 border-white"
                  : "text-white"
              } hover:text-blue-500 transition-colors duration-300`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/ideas"
              className={`${
                location.pathname === "/ideas"
                  ? " border-b-2 border-white"
                  : "text-white"
              } hover:text-blue-500 transition-colors duration-300`}
            >
              Ideas
            </Link>
          </li>
          <li>
            <Link
              to="/ideas"
              className={`${
                location.pathname === "/career"
                  ? "border-b-2 border-white"
                  : "text-white"
              } hover:text-blue-500 transition-colors duration-300`}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/ideas"
              className={`${
                location.pathname === "/contact"
                  ? " border-b-2 border-white"
                  : "text-white"
              } hover:text-blue-500 transition-colors duration-300`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Navigationbar;
