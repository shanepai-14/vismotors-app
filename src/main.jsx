import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard.jsx';
import Layout from './layout.jsx';
import Payment from './pages/payment/payment.jsx';
import Contact from './pages/contact/contact.jsx';
import Link from './pages/link/link.jsx';
import ProtectedRoute from './ProtectedRoute';
import Login from './login.jsx'
import './index.css'
import { AuthProvider } from './AuthContext';
const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    element: <Login/>,
    path: '/vismotors-app',
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '/vismotors-app/dashboard',
        
        element: <Dashboard />,

      },
      {
        path: '/vismotors-app/payment',
        
        element: <Payment />,

      },
      {
        path: '/vismotors-app/contact',
        
        element: <Contact />,

      },
      {
        path: '/vismotors-app/link',
        
        element: <Link/>,

      }
      
      
     
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

     <AuthProvider>

 <QueryClientProvider client={queryClient}>

   <RouterProvider router={router}/>
   
       </QueryClientProvider>

       </AuthProvider>
  </React.StrictMode>

)
