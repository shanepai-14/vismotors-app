import React from 'react';

const linkAcc = () => {
    return (
        <div className=''>
            <div className="flex flex-col justify-center items-center gap-4 p-4">
        <p className="text-gray-500 text-sm">PLEASE LINK ACCOUNT TO CONTINUE</p>
        <img src={Account} alt="" width={200} />
        <button className="bg-green-500 mt-6 w-full select-none p-2 rounded-lg font-bold  py-3 px-6 text-center align-middle font-sans text-xs uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Link Account
        </button>
      </div>
        </div>
    )
}

export default linkAcc