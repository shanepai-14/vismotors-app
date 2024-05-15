import React from "react";
import { Link } from 'react-router-dom';   
import { useLocation } from 'react-router-dom';

const bottomNax = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div className="bg-white fixed bottom-0 w-full  border-t border-gray-200 flex">
      <Link to='/vismotors-app'
  
        className={`flex flex-grow items-center justify-center p-2 ${currentPath == '/' ? 'text-green-500'  : 'text-gray-500'}  hover:text-green-500`}
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
          <span className="material-symbols-outlined">
dashboard
</span>
          </span>
          <span className="block text-xs leading-none">Dashboard</span>
        </div>
      </Link>
      <Link
        to='/payment'
        className={`flex flex-grow items-center justify-center p-2 ${currentPath == '/payment' ? 'text-green-500'  : 'text-gray-500'}  hover:text-green-500"`}
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
          <span className="material-symbols-outlined">
receipt_long
</span>
          </span>
          <span className="block text-xs leading-none">Payment History</span>
        </div>
      </Link>
      <Link
        to='/contact'
        className={`flex flex-grow items-center justify-center p-2 ${currentPath == '/contact' ? 'text-green-500'  : 'text-gray-500'} hover:text-green-500`}
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
          <span className="material-symbols-outlined">
feedback
</span>
          </span>
          <span className="block text-xs leading-none">Contact Us</span>
        </div>
      </Link>
      <Link
        to="/link"
        className={`flex flex-grow items-center justify-center p-2 ${currentPath == '/link' ? 'text-green-500'  : 'text-gray-500'} hover:text-green-500`}
      >
        <div className="text-center">
          <span className="block h-8 text-3xl leading-8">
          <span className="material-symbols-outlined">
account_circle
</span>
          </span>
          <span className="block text-xs leading-none">Link</span>
        </div>
      </Link>
    </div>
  );
};

export default bottomNax;
