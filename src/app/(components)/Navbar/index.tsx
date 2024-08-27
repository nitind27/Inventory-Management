"use client";
import { Bell, Menu, Sun } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between item-center w-full mb-7">
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded full hovering-blue-100"
          onClick={() => {}}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>
      <div className="relative">
        <input
          type="search"
          placeholder="Start type to gruups & products"
          className="pl-10 pr-4 py-2 md:w-80 border-2 border-gray-300 bg-white rounded-lg focus:only"
        />
        <div className="absolute inset-y-0 left-0  pl-3 flex items-center pointer-events-non">
          <Bell className="text-gray-500" size={20} />
        </div>
      </div>
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={() => {}}>
              <Sun className="cursor-pointer text-gray-500" size={24} />
            </button>
          </div>
          <div className="relative">
            <Bell className="cursor-pointer text-gray-500" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
