import React, { useState } from 'react';
import Account from "../../assets/account.svg";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import axios from 'axios';
import { userData ,userProfile, BASE_URL,formatDate,getFilename,IMAGE_URL  } from "../../utils";

const createBlobUrl = async (fileUrl) => {
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error creating Blob URL:', error);
    throw error;
  }
};

const link = () => {
   const accountData = userData;
   const profileData = userProfile[0];
   
   console.log(profileData)
   console.log(accountData)
    return (
        
        <div className=''>
             <div className="">
            <div className="shadow-md mt-3 relative flex flex-col items-center rounded-[20px] w-full mx-auto p-4 bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:!shadow-none">
                <div className="relative flex h-32 w-full justify-center rounded-xl bg-cover" >
                    <img src='https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png' className="absolute flex h-32 w-full justify-center rounded-xl bg-cover"/> 
                    <div className="absolute -bottom-12 flex h-[87px] w-[87px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400 dark:!border-navy-700">
                        <img className="h-full w-full rounded-full" src={`${IMAGE_URL}/storage/temporary_docs/${profileData.profile_picture}`} alt="" />
                    </div>
                </div> 
                <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-xl font-bold text-navy-700 ">
                    {accountData.first_name +" "+accountData.last_name}
                    </h4>
                    <p className="text-base font-normal text-gray-600">{profileData.occupation}</p>
                </div> 
                <div className="mt-6 mb-3 flex gap-14 md:!gap-14">
                    <div className="flex flex-col items-center justify-center">
      
                    <p className="text-sm font-normal text-gray-600">{profileData.address_city} {profileData.address_brgy} {profileData.address_landmark} {profileData.address_lot} {profileData.address_prov}</p>
                    </div>
                  
                </div>
            </div>  
           
        </div>
           <div className="px-4 sm:px-0 mt-4">
        <h3 className="text-base font-semibold leading-7 text-gray-900">User Information</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Username</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{accountData.username}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{accountData.email}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Phone no.</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileData.phone_no}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Civil Status</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileData.civil_status}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Citizenship</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileData.citizenship}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Gender</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileData.gender}</dd>
          </div>
         
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Fathers name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileData.fathers_name}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Mothers name</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{profileData.mothers_name}</dd>
          </div>
       
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">{getFilename(profileData.valid_one)}</span>
                      <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a  download={getFilename(profileData.valid_one)}  href={`${IMAGE_URL}/storage/temporary_docs/${profileData.valid_one}`} className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">{getFilename(profileData.valid_two)}</span>
                      <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a  download={getFilename(profileData.valid_two)} href={`${IMAGE_URL}/storage/temporary_docs/${profileData.valid_two}`} className="font-medium text-indigo-600 hover:text-indigo-500">
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
        </div>
    )
}

export default link