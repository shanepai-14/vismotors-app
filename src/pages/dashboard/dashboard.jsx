import React from "react";
import Account from "../../assets/account.svg";
import { BASE_URL, formatCurrency } from "../../utils";
import apiClient from "../../apiClient";
import { useQuery } from "react-query";

const userData = JSON.parse(localStorage.getItem('userData')) || null;
 const userProfile = JSON.parse(localStorage.getItem("userProfile"));
const fetchBalance = async (userId) => {
  try {
    const response = await apiClient.get(`/balance/${userId}`);
    return response.data;
  } catch (error) {
    // Handle error
    return [];
  }
};
const dashboard = () => {
  const userId = userData?.id;
  const { data, isLoading, error } = useQuery(userId ? ['fetchBalance', userId] : null,
  userId ? () => fetchBalance(userId) : null, () =>
    fetchBalance(userId)
  );
  console.log(userData.id);
  console.log(userData);
  if (isLoading) {
    return <div>Loading....</div>;
  }
  console.log(data);
  return (
    <div className="h-screen pt-4">
      {data.map((transaction, index) => (
        <div key={index} className="bg-gradient-to-r px-4 pb-4 ">
          <div className="p-4 rounded-md bg-gradient-to-r from-rose-500 to-red-500  text-white shadow-sm">
           <div className="flex justify-between items-center flex-col">
           <p className="block mb-2 font-sans text-xl antialiased  font-semibold leading-snug tracking-normal text-blue-gray-900">
              {transaction.motor}
            </p>
            <button
        class="select-none rounded-lg bg-amber-500 py-1 px-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-amber-500/20 transition-all hover:shadow-lg hover:shadow-amber-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        {transaction.status}
      </button>
           </div>
            <div className="flex justify-between items-center">
              <div>
                <p>Current Due</p>
                <p className="font-bold">
                  {formatCurrency(transaction.monthly_due)}
                </p>
                <p className="">
                  Balance:{" "}
                  <span>{formatCurrency(transaction.last_balance)}</span>
                </p>
              </div>
              <div className="text-right">
              {transaction.trans_type == "Cash" && 
                (<p>Contract</p>)}
                {transaction.trans_type !== "Cash" && 
                ( <p>Contract - {transaction.ref_no}</p>)}
               
                {transaction.trans_type == "Cash" && 
                (<p>{transaction.ref_no}</p>)}
                <p>{transaction.trans_type}</p>
                {transaction.trans_type !== "Cash" && 
                ( <p><i className="text-blue-300 font-bold">{transaction.due}</i> of the month</p>)}
               
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="px-4 pt-4 rounded-t-custom-t bg-gradient-to-r shadow-md from-rose-500 to-red-500 h-full">
        <div className="text-gray-400 text-xs flex justify-center">
          <span className="material-symbols-outlined text-white">
            notifications
          </span>
          <p className="text-white">Notifications</p>
        </div>
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-lg   bg-clip-border rounded-xl w-full">
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Dear Valued Customers,
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              As the year end we,appreciate your trust in Vismotor Corp and
              Global Creditlending Corp. Reminding you that with December
              31,2023 falling on a Sunday and branches closed on...
            </p>
          </div>
          <div className="p-6 pt-0">
            <a href="#" className="inline-block">
              <button
                className="flex items-center gap-2 px-4 py-2 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                type="button"
              >
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
