import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { userData ,userProfile, BASE_URL } from "../../utils";
import apiClient from '../../apiClient'
import { useQuery } from 'react-query';

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
  const userId = userData?.id;
  const { data, isLoading, error } = useQuery(['fetchPayments', userId], () => fetchPayments(userId));
  

  if(isLoading){
    return <div>Loading....</div>
  }
  
  console.log(data);
    return (
      
        <div className='text-black'>
            <Accordion defaultActiveKey="0">
            {data.map((transaction, index) => (     
      <Accordion.Item eventKey={index} key={transaction.id}>
        <Accordion.Header>{transaction.ref_no}</Accordion.Header>
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
      <p className="text-sm leading-6 text-gray-900">{payment.amount}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500"><time dateTime="2023-01-23T13:23Z">{payment.created_at}</time></p>
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