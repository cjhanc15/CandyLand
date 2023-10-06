import React, { createContext, useState } from "react";

// Create a context with a default value of false
export const LoginContext = createContext(false);

export const LoginProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      {children}
    </LoginContext.Provider>
  );
};
