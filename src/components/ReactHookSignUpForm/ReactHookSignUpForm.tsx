import { type FormEventHandler, useRef, useEffect } from "react";
import { Button } from "../../ui";
import { Input } from "../../ui/Input/Input";
import { useForm, type SubmitHandler } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
  language: string;
};

export const ReactHookSignUpForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const handleSignUpFormSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleSignUpFormSubmit)}>
      <div className="mb-2">
        <p>E-mail: {watch("email")}</p>
        <p>Language: {watch("language")}</p>
      </div>
      <Input
        label="E-mail: "
        type="email"
        {...register("email", {
          required: "E-mail is required",
        })}
      />
      {errors && errors.email && (
        <p className="text-sm text-red-500">{errors.email.message}</p>
      )}
      <Input
        label="Password: "
        type="password"
        {...register("password", {
          required: "Password is required",
        })}
      />
      {errors && errors.password && (
        <p className="text-sm text-red-500">{errors.password.message}</p>
      )}
      <Input label="Language: " {...register("language")} />
      {errors && errors.language && (
        <p className="text-sm text-red-500">{errors.language.message}</p>
      )}
      <Button label="Sign up" type="submit" />
    </form>
  );
};
