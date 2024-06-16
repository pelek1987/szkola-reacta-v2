// import { Button, Text } from "./ui";
// import { ReactHookSignUpForm } from "./components";
// import { AuthContextProvider } from "./context/Auth/AuthContext";
import { AuthInfo } from "./components/Auth";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeContextProvider } from "./context/Theme/ThemeContext";

const App = () => {
  return (
    <>
      <ThemeContextProvider>
        <ThemeSwitcher />
        {/*<Button label="Click me" onClick={() => console.log("Button clicked!")} /> */}
        {/* <StatefulSignUpForm /> */}
        {/* <StatelessSignUpForm /> */}
        {/* <ReactHookSignUpForm /> */}
        <AuthInfo />
      </ThemeContextProvider>
    </>
  );
};

export default App;
