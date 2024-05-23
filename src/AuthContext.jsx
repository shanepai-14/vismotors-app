import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (response) => {
    setUserData(response.data.user);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', response.data.access_token);
          localStorage.setItem('userData', JSON.stringify(response.data.user));
          localStorage.setItem('userProfile', JSON.stringify(response.data.profile));

  };

  const logout = () => {
    setUserData(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
  };

  const value = {
    userData,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
