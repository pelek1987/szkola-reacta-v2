import { useAuthContext } from "../../context/Auth/AuthContext";
import { Button, Text } from "../../ui";

export const AuthCredentials = () => {
  const context = useAuthContext();

  return (
    <>
      <Text>Is user logged in? {context.isLoggedIn ? "Yes" : "No"}</Text>
      <Button onClick={context.toggleValue} label="Toggle" />
      <Button onClick={context.logIn} label="Log in" />
      <Button onClick={context.logOut} label="Log out" />
    </>
  );
};
