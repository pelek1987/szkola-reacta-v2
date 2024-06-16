// import { ReactHookSignUpForm } from "./components";
import { AuthInfo } from "./components/Auth";
import { AuthContextProvider } from "./context/Auth/AuthContext";
import { Button, Text } from "./ui";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <Text>Hola Amigos!</Text>
      {/*<Button label="Click me" onClick={() => console.log("Button clicked!")} /> */}
      {/* <StatefulSignUpForm /> */}
      {/* <StatelessSignUpForm /> */}
      {/* <ReactHookSignUpForm /> */}
      <AuthInfo />
    </>
  );
};

export default App;
