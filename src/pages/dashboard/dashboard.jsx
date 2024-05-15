import React from "react";
import Account from "../../assets/account.svg";
const dashboard = () => {
  return (
    <div className="">
      <div className="bg-gradient-to-r from-green-500 to-green-400 p-4">
        <p>Current Due</p>
        <p className="font-bold">₱0.00</p>
        <p className="">
          Balance: <span>₱0.00</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4 p-4">
        <p className="text-gray-500 text-sm">PLEASE LINK ACCOUNT TO CONTINUE</p>
        <img src={Account} alt="" width={200} />
        <button className="bg-green-500 mt-6 w-full select-none p-2 rounded-lg font-bold  py-3 px-6 text-center align-middle font-sans text-xs uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Link Account
        </button>
      </div>
      <div className="px-4">
        <div className="text-gray-400 text-xs flex justify-center">
          <span className="material-symbols-outlined">notifications</span>
          <p>Notifications</p>
        </div>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-lg   bg-clip-border rounded-xl w-full">
  <div className="p-6">
    
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      Dear Valued Customers,
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      As the year end we,appreciate your trust in Vismotor Corp and Global Creditlending Corp.
     Reminding you that with December 31,2023 falling on a Sunday and branches closed on...
    </p>
  </div>
  <div className="p-6 pt-0">
    <a href="#" className="inline-block">
      <button
        className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
        type="button">
        December 24,2024
        <span className="material-symbols-outlined">
calendar_month
</span>
      </button>
    </a>
  </div>
</div> 
      </div>
    </div>
  );
};

export default dashboard;
