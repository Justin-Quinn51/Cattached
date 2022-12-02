import React from "react";
import Image from "next/image";
import Logo from "../public/Logo.png";

export default function Header() {
  return (
    <header className="bg-white">
      <nav className="bg-blue-300 flex justify-between items-center w-full py-4 px-4 text-lg text-gray-700 md:py-0">
        <Image
          className=""
          src={Logo}
          alt="Cattached Logo"
          height={150}
          width={150}
        />
        <svg
          className="h-6 w-6 cursor-pointer block md:hidden"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
        <ul className="flex space-x-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Quiz</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button className="bg-red-600 rounded-lg px-3 py-1.5 cursor-pointer">
              Sign Up
            </button>
          </li>
          <li>
            <button className="bg-red-600 rounded-lg px-3 py-1.5 cursor-pointer">
              Log In
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
