import React, { useEffect, useState } from 'react';
import { status } from '../helper/httpStatus';
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setData(status) 
  }, [])

  const contextValue = {
    search,
    setSearch,
    data,
  };

  return (
    <AuthContext.Provider value={ contextValue }>{children}</AuthContext.Provider>
  )
};

export const useAuth = () => React.useContext(AuthContext);