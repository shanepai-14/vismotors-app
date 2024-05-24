import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  BASE_URL,formatDate,formatCurrency } from "../../utils";
import apiClient from '../../apiClient'
import { useQuery } from 'react-query';
import { useAuth } from '../../AuthContext';
const fetchPayments = async (userId) => {
  try {
    const response = await apiClient.get(`/payments/${userId}`);
    return response.data;
  } catch (error) {
    // Handle error
    return [];
  }
};
const payment = () => {
  const { userData } = useAuth();
  const userId = userData?.id;
  const { data, isLoading, error } = useQuery(['fetchPayments', userId], () => fetchPayments(userId));
  

  if(isLoading){
    return <div className='h-screen w-screen'>
               <div className='flex justify-between w-full items-center p-4  animate-pulse bg-gray-300'>
         <div >
         <p className='block antialiased tracking-normal font-sans bg-slate-200 text-slate-200 rounded-md mb-2 text-base font-semibold leading-relaxed '>1231231231231231</p> 
         <p className='block antialiased font-sans text-sm leading-normal bg-slate-200 text-slate-200 rounded-md font-normal'>Contract number : 12312</p>
      
         </div>
         <div className='mr-3'>
         <p className='block antialiased tracking-normal text-right font-sans text-base font-semibold leading-relaxed bg-slate-200 mb-1 text-slate-200 rounded-md'>Balance</p> 
         <h2 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-relaxed  bg-slate-200 text-slate-200 rounded-md'>12312312</h2>
         </div>
        </div>
        <div className='flex justify-between w-full items-center p-4 mb-4 animate-pulse border-t-2 border-gray-400  bg-gray-300'>
         <div >
         <p className='block antialiased tracking-normal font-sans bg-slate-200 text-slate-200 rounded-md mb-2 text-base font-semibold leading-relaxed '>1231231231231231</p> 
         <p className='block antialiased font-sans text-sm leading-normal bg-slate-200 text-slate-200 rounded-md font-normal'>Contract number : 12312</p>
      
         </div>
         <div className='mr-3'>
         <p className='block antialiased tracking-normal text-right font-sans text-base font-semibold leading-relaxed bg-slate-200 mb-1 text-slate-200 rounded-md'>Balance</p> 
         <h2 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-relaxed  bg-slate-200 text-slate-200 rounded-md'>12312312</h2>
         </div>
        </div>
    </div>
  }
  
  console.log(data);
    return (
      
        <div className='text-black'>
            <Accordion defaultActiveKey="0" alwaysOpen>
            {data.map((transaction, index) => (     
      <Accordion.Item eventKey={index} key={transaction.id} >
        <Accordion.Header>
        <div className='flex justify-between w-full items-center'>
         <div >
         <p className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900'>{transaction.motor}</p> 
         <p className='block antialiased font-sans text-sm leading-normal text-gray-700 font-normal'>Contract number : {transaction.ref_no}</p>
      
         </div>
         <div className='mr-3'>
         <p className='block antialiased tracking-normal text-right font-sans text-base font-semibold leading-relaxed text-blue-gray-900'>Balance</p> 
         <h2 className='block antialiased tracking-normal font-sans text-xl font-semibold leading-relaxed text-blue-gray-900 '>{formatCurrency(transaction.last_balance)}</h2>
         </div>
        </div>
        </Accordion.Header>
        <Accordion.Body>
        <ul role="list" className="divide-y divide-gray-200">
        {transaction.payments.map((payment, index) => (   
  <li className="flex justify-between py-2 px-2 hover:bg-green-200" key={payment.id}>
    <div className="flex min-w-0 gap-x-4">
    
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-gray-900">OR# - {payment.or_number}</p>
        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Payment method - {payment.payment_method}</p>
      </div>
    </div>
    <div className="shrink-0 flex flex-col items-end">
      <p className="text-sm leading-6 text-gray-900">{formatCurrency(payment.amount)}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500"><time dateTime="2023-01-23T13:23Z">{formatDate(payment.created_at) }</time></p>
    </div>
  </li>
    ))}
  
  </ul>
        </Accordion.Body>
      </Accordion.Item>
    ))}
    </Accordion>
 
        </div>
    )
}

export default payment