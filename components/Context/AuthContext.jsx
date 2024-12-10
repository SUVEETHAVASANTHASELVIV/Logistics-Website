import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState(null);

  const login = (id) => {
    setAuth(true);
    setUserId(id);
  };

  const logout = () => {
    setAuth(false);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
