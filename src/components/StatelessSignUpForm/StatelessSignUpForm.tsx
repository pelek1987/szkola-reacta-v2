import { type FormEventHandler, useRef } from "react";
import { Button } from "../../ui";

type FormData = {
  email: string;
  password: string;
  language: string;
};

export const StatelessSignUpForm = () => {
  const emailField = useRef<HTMLInputElement>(null);
  const passwordField = useRef<HTMLInputElement>(null);
  const languageField = useRef<HTMLInputElement>(null);

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
      <div className="mb-2">
        <label htmlFor="email" className="mr-2">
          E-mail:
        </label>
        <input id="email" type="email" ref={emailField} />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="mr-2">
          Password:
        </label>
        <input id="password" type="password" ref={passwordField} />
      </div>
      <div className="mb-2">
        <label htmlFor="language" className="mr-2">
          Language:
        </label>
        <input id="language" ref={languageField} />
      </div>
      <Button label="Sign up" type="submit" />
    </form>
  );
};
