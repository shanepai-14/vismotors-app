import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState(null);
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (response) => {
    setUserData(response.data.user);
    setUserProfile(response.data.profile);
    setIsAuthenticated(true);
         localStorage.setItem('authToken', response.data.access_token);
          localStorage.setItem('userData', JSON.stringify(response.data.user));
          localStorage.setItem('userProfile', JSON.stringify(response.data.profile));

  };

  const logout = () => {
    setUserData(null);
    setUserProfile(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
  };

  const value = {
    userData,
    isAuthenticated,
    userProfile,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
