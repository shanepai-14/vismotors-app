import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard.jsx';
import Layout from './layout.jsx';
import './index.css'
import { App } from 'konsta/react';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        
        element: <Dashboard />,

      },
      
     
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
