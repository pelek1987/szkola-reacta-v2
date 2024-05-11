import { type ChangeEventHandler, useState, FormEventHandler } from "react";
import { Button } from "../../ui";

type FormData = {
  email: string;
  password: string;
  language: string;
};

export const StatefulSignUpForm = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    language: "",
  });

  const { email, password, language } = formData;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <p>Email: {email}</p>
        <p>Language: {language}</p>
      </div>
      <div className="mb-2">
        <label htmlFor="email" className="mr-2">
          E-mail:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="password" className="mr-2">
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="language" className="mr-2">
          Language:
        </label>
        <input id="language" value={language} onChange={handleInputChange} />
      </div>
      <Button label="Sign up" type="submit" />
    </form>
  );
};
