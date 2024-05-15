import React, { useState } from 'react';
import { Link } from 'react-router-dom';   
import { useLocation } from 'react-router-dom';


function tabName(currentPath){
  if(currentPath == '/payment') return "Payment History"
  if(currentPath == '/contact' )  return "Contact Us"
  if(currentPath == '/link' )  return "Link"
  
  return "DASHBOARD"
}
const header = () => {
  const location = useLocation();
  const currentPath = location.pathname;
      console.log(currentPath)
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  };
    return (
      <>
   
   <header className=" bg-[#48c05a] shadow-lg">

<nav className="mx-auto flex max-w-7xl items-center justify-start p-2 lg:px-8" aria-label="Global">
<div className="flex ">
    <button onClick={toggleMenu} type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
      <span className="sr-only">Open main menu</span>
      <svg className="h-6 w-6" fill="#fffff" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>
  </div>
  <div className="flex lg:flex-1 items-center">
    <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only text-white">{tabName(currentPath)}</span>
      <img className="h-8 w-auto" src="" alt=""/>
    </a>
    <p className='ml-6  text-white text-md font-semibold leading-6'>{tabName(currentPath)}</p>
  </div>
  
  <div className="hidden lg:flex lg:gap-x-12">
    
    <Link to='/' className={`text-sm font-semibold leading-6 transition-all  ${currentPath == '/' ? 'text-blue-600' : 'text-gray-900 scale-105'}`}>Home</Link>
    <Link to='/data-management' className={`text-sm font-semibold transition-all  leading-6 ${currentPath == '/data-management' ? 'text-blue-600 scale-105' : 'text-gray-900'}`}>Data Management</Link>
    <Link to='/research' className={`text-sm font-semibold leading-6 transition-all  ${currentPath == '/research' ? 'text-blue-600 scale-105' : 'text-gray-900'}`}>Research</Link>
    <Link to="/legal-bases" className={`text-sm font-semibold leading-6 transition-all  ${currentPath == '/legal-bases' ? 'text-blue-600 scale-105' : 'text-gray-900'}`}>Legal Bases</Link>
  </div>
  <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
  </div>
</nav>

<div className={`${isOpen ? '-translate-x-[0rem]' : '-translate-x-[19rem]'} top-0 fixed h-screen  z-[9999]  transition ease-out duration-200`} role="dialog" aria-modal="true">

  <div className="  inset-y-0   w-[300px] h-full overflow-y-auto bg-green-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between">
      <a href="#" className="-m-1.5 p-1.5">
        <span className="sr-only text-gray-900">Vismotor</span>
        <img className="h-8 w-auto" src='#' alt=""/>
      </a>
      <p className='ml-3 text-white text-md font-semibold leading-6'>Vismotor</p>
      <button onClick={toggleMenu} type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
        <span className="sr-only">Close menu</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
        <Link onClick={toggleMenu} to='/' className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 transition-all  ${currentPath == '/' ? 'text-blue-600 bg-gray-50' : 'text-gray-900  '}`}>#</Link>
    <Link onClick={toggleMenu} to='/data-management' className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 transition-all ${currentPath == '/data-management' ? 'text-blue-600 bg-gray-50' : 'text-gray-900 '}`}>#</Link>
    <Link onClick={toggleMenu} to='/research' className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 transition-all  ${currentPath == '/research' ? 'text-blue-600 bg-gray-50' : 'text-gray-900 '}`}>#</Link>
    <Link onClick={toggleMenu} to="/legal-bases" className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 transition-all  ${currentPath == '/legal-bases' ? 'text-blue-600 bg-gray-50' : 'text-gray-900 '}`}>#</Link>
       
        </div>
        <div className="py-6">
          <a href="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log in</a>
        </div>
      </div>
    </div>
  </div>
</div>

</header>
  
    </>
    )
}

export default header