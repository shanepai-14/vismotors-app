import React from 'react';
import { Navigate } from 'react-router-dom';

export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token ? true : false;
};

export const processEnv = process.env;
export const BASE_URL = processEnv.REACT_APP_BASE_URL;
export const IMAGE_URL = processEnv.REACT_APP_IMAGE_URL;

export const userData = JSON.parse(localStorage.getItem('userData'));
export const userProfile = JSON.parse(localStorage.getItem('userProfile'));


export function formatDate(dateString,includeWeekday = true) {
    const date = new Date(dateString);
    const options = { weekday:  includeWeekday ? 'long' : undefined, year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
  }
export function getFilename(path) {
    // Split the path by the '/' character
    const segments = path.split('/');
    // Return the last segment which is the filename
    return segments.pop();
  }

  export const formatCurrency = (amountString, locale = 'en-PH', currency = 'PHP') => {
    const amount = parseFloat(amountString);
  
    if (isNaN(amount)) {
      throw new Error('Invalid amount');
    }
  
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(amount);
  };