import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard.jsx';
import Layout from './layout.jsx';
import Payment from './pages/payment/payment.jsx';
import Contact from './pages/contact/contact.jsx';
import Link from './pages/link/link.jsx';
import './index.css'
import { App } from 'konsta/react';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/vismotors-app',
        
        element: <Dashboard />,

      },
      {
        path: '/payment',
        
        element: <Payment />,

      },
      {
        path: '/contact',
        
        element: <Contact />,

      },
      {
        path: '/link',
        
        element: <Link/>,

      }
      
      
     
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
   
 <QueryClientProvider client={queryClient}>

   <RouterProvider router={router}/>

       </QueryClientProvider>
      
  </React.StrictMode>

)
