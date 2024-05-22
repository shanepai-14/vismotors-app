import React from 'react';
import { Navigate } from 'react-router-dom';

export const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  return token ? true : false;
};

export const processEnv = process.env;
export const BASE_URL = processEnv.REACT_APP_BASE_URL;

export const userData = JSON.parse(localStorage.getItem('userData'));
export const userProfile = JSON.parse(localStorage.getItem('userProfile'));