import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const toggledAuth = () => {
    setIsAuth(!isAuth);
  };
  return (
    <AuthContext.Provider value={[isAuth, toggledAuth]}>
      {children}
    </AuthContext.Provider>
  );
};
