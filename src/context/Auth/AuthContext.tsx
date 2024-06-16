import { type ReactNode, createContext, useContext, useState } from "react";

type AuthContextType = {
  isLoggedIn: boolean;
  toggleValue: () => void;
  logIn: () => void;
  logOut: () => void;
};

const AuthContext = createContext<null | AuthContextType>(null);

const useAuth = (): AuthContextType => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleValue = () => setIsLoggedIn((prevState) => !prevState);
  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return { isLoggedIn, toggleValue, logIn, logOut };
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }

  return context;
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AuthContext.Provider value={useAuth()}>{children}</AuthContext.Provider>
  );
};
