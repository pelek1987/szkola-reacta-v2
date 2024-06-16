import { AuthContextProvider } from "../../context/Auth/AuthContext";
import { AuthCredentials } from "./AuthCredentials";

export const AuthInfo = () => {
  return (
    <AuthContextProvider>
      <div>
        <h1 className="dark:text-slate-200">Auth Info</h1>
        <AuthCredentials />
      </div>
    </AuthContextProvider>
  );
};
