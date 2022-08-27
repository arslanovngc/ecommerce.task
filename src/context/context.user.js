import { useContext, useEffect, useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, useUserContext };
