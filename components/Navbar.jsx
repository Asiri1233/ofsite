"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className="">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center">
            <img
              src="https://cdn.icon-icons.com/icons2/3007/PNG/512/onlyfans_logo_icon_188453.png"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span  className="self-center md:text-2xl text-lg font-semibold whitespace-nowrap text-white">
              Leaked Fans
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden  focus:outline-none focus:ring-2 text-white "
            aria-controls="navbar-multi-level"
            aria-expanded="false"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              isMobileMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  href="/"
                  className="block py-2 pl-3 pr-4   text-white rounded md:bg-transparent  md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://t.me/WRestocker"
                  target="_blank"
                  className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
                >
                  Buy Slot
                </a>
              </li>
              <li>
                <a
                  href="https://pixelmp.store"
                  target='_blank'
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-white md:p-0"
                >
                  PixelMP
                </a>
              </li>
              <li>
                <a
                  href="https://pasted.live"
                  target="_blank"
                  className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 text-white md:p-0"
                >
                  PasteWeb
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
