import React from "react";

const bottomNax = () => {
  return (
    <div className="bg-white absolute bottom-0 w-full  border-t border-gray-200 flex">
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-indigo-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <span className="material-symbols-outlined">newsmode</span>
          </span>
          <span className="block text-xs leading-none">Today</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <span className="material-symbols-outlined">apps</span>
          </span>
          <span className="block text-xs leading-none">Categories</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <span className="material-symbols-outlined">star</span>
          </span>
          <span className="block text-xs leading-none">Favorites</span>
        </div>
      </a>
      <a
        href="#"
        className="flex flex-grow items-center justify-center p-2 text-gray-500 hover:text-indigo-500"
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
            <span className="material-symbols-outlined">search</span>
          </span>
          <span className="block text-xs leading-none">Search</span>
        </div>
      </a>
    </div>
  );
};

export default bottomNax;
