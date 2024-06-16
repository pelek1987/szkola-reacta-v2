import { useAuthContext } from "../../context/Auth/AuthContext";
import { Button } from "../../ui";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <>
      <p>Is user logged in? {context.isLoggedIn ? "Yes" : "No"}</p>
      <Button onClick={context.toggleValue} label="Toggle" />
      <Button onClick={context.logIn} label="Log in" />
      <Button onClick={context.logOut} label="Log out" />
    </>
  );
};
