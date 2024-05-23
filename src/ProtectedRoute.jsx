import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { isAuthenticated } from './utils';
import { useAuth } from './AuthContext'; 
const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const isAuth = isAuthenticated();
  const { userData } = useAuth();
  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return React.cloneElement(children, { userData });
};

export default ProtectedRoute;