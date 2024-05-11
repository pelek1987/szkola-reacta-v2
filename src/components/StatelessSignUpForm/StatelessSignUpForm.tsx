import { type FormEventHandler, useRef, useEffect } from "react";
import { Button } from "../../ui";
import { Input } from "../../ui/Input/Input";

type FormData = {
  email: string;
  password: string;
  language: string;
};

export const StatelessSignUpForm = () => {
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const languageField = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (emailField.current) {
      emailField.current.focus();
    }
  }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData: FormData = {
      email: emailField.current?.value ?? "",
      password: passwordField.current?.value ?? "",
      language: languageField.current?.value ?? "",
    };

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="E-mail: " type="email" ref={emailField} />
      <Input label="Password: " type="password" ref={passwordField} />
      <Input label="Language: " ref={languageField} />
      <Button label="Sign up" type="submit" />
    </form>
  );
};
