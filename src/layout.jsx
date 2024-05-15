import React from 'react';
import { Outlet } from "react-router-dom"
import Header from './components/header.jsx';
import BottomNav from './components/bottom-nav.jsx';
import {
    Page,
  
    App,
  } from 'konsta/react';
const layout = () => {
    return (

    
        <div className='h-full w-full left-0 top-0 overflow-auto absolute bg-md-light-surface pb-52'>
            <Header />
    
          <main>
            <Outlet />
          </main>
 
        <BottomNav/>

        </div>
      
      
    )
}

export default layout