import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Vismotor from "../../public/vismotor.png"
function tabName(currentPath) {
  if (currentPath == "/vismotors-app/payment") return "Payment History";
  if (currentPath == "/vismotors-app/contact") return "Contact Us";
  if (currentPath == "/vismotors-app/link") return "Profile";

  return "DASHBOARD";
}
const header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    localStorage.removeItem('userProfile');

    // Navigate to the login page
    navigate('/vismotors-app');
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className=" bg-[#DC4036] shadow-lg">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-start p-2 lg:px-8"
          aria-label="Global"
        >
          <div className="flex ">
            <button
              onClick={toggleMenu}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="#fffff"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="flex lg:flex-1 items-center">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only text-white">{tabName(currentPath)}</span>
              <img className="h-8 w-auto" src='#' alt="" />
            </a>
            <p className="ml-6  text-white text-md font-semibold leading-6">
              {tabName(currentPath)}
            </p>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            <Link
              to="/vismotors-app"
              className={`text-sm font-semibold leading-6 transition-all  ${
                currentPath == "/vismotors-app" ? "text-red-600" : "text-white scale-105"
              }`}
            >
              Home
            </Link>
            <Link
              to="/data-management"
              className={`text-sm font-semibold transition-all  leading-6 ${
                currentPath == "/data-management"
                  ? "text-red-600 scale-105"
                  : "text-white"
              }`}
            >
              Data Management
            </Link>
            <Link
              to="/research"
              className={`text-sm font-semibold leading-6 transition-all  ${
                currentPath == "/research"
                  ? "text-red-600 scale-105"
                  : "text-white"
              }`}
            >
              Research
            </Link>
            <Link
              to="/legal-bases"
              className={`text-sm font-semibold leading-6 transition-all  ${
                currentPath == "/legal-bases"
                  ? "text-red-600 scale-105"
                  : "text-gray-900"
              }`}
            >
              Legal Bases
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <div
          className={`${
            isOpen ? "-translate-x-[0rem]" : "-translate-x-[19rem]"
          } top-0 fixed h-screen  z-[9999]  transition ease-out duration-200`}
          role="dialog"
          aria-modal="true"
        >
          <div className="  inset-y-0   w-[300px] h-full overflow-y-auto bg-red-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only text-gray-900">Vismotor</span>
                <img className="h-8 w-auto" src={Vismotor} alt="" />
              </a>
              <p className="ml-3 text-white text-md font-semibold leading-6">
                Vismotor
              </p>
              <button
                onClick={toggleMenu}
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    onClick={toggleMenu}
                    to="/vismotors-app/dashboard"
                    className={`-mx-3 flex items-center gap-2  group rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50  transition-all  ${
                      currentPath == "/vismotors-app/dashboard"
                        ? "text-red-600 bg-gray-50"
                        : "text-white  "
                    }`}
                  >
                    {" "}
                    <span className="block h-8 text-3xl leading-8  group-hover:text-red-600 hover:text-red-600">
                      <span className="material-symbols-outlined">
                        dashboard
                      </span>
                    </span>
                    <span className="block text-xs leading-none  group-hover:text-red-600 hover:text-red-600">
                      Dashboard
                    </span>
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/vismotors-app/payment"
                    className={`-mx-3 flex items-center  gap-2 group rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50  transition-all ${
                      currentPath == "/vismotors-app/payment"
                        ? "text-red-600 bg-gray-50"
                        : "text-white "
                    }`}
                  >
                    <span className="block h-8 text-3xl leading-8  group-hover:text-red-600 hover:text-red-600">
                      <span className="material-symbols-outlined">
                        receipt_long
                      </span>
                    </span>
                    <span className="block text-xs leading-none  group-hover:text-red-600 hover:text-red-600">
                      Payment History
                    </span>
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/vismotors-app/contact"
                    className={`-mx-3 flex items-center gap-2 group rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50  transition-all  ${
                      currentPath == "/vismotors-app/contact"
                        ? "text-red-600 bg-gray-50"
                        : "text-white "
                    }`}
                  >
                    {" "}
                    <span className="block h-8 text-3xl leading-8  group-hover:text-red-600 hover:text-red-600">
                      <span className="material-symbols-outlined">
                        feedback
                      </span>
                    </span>
                    <span className="block text-xs leading-none  group-hover:text-red-600 hover:text-red-600">
                      Contact Us
                    </span>
                  </Link>
                  <Link
                    onClick={toggleMenu}
                    to="/vismotors-app/link"
                    className={`-mx-3 flex items-center gap-2 group rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50  transition-all  ${
                      currentPath == "/vismotors-app/link"
                        ? "text-red-600 bg-gray-50"
                        : "text-white "
                    }`}
                  >
                    {" "}
                    <span className="block h-8 text-3xl leading-8  group-hover:text-red-600 hover:text-red-600 ">
                      <span className="material-symbols-outlined">
                        account_circle
                      </span>
                    </span>
                  

                    <span className="block text-xs leading-none  group-hover:text-red-600 hover:text-red-600">Profile</span>
                  </Link>
                </div>
                <div className="py-6 hover:text-red-600">
                  <a
                    href="#"
                    className="-mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:text-red-600 hover:bg-gray-50"
                    onClick={handleLogout}
                 >
                    Logout
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header;
