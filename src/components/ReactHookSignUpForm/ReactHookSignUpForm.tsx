import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../ui";
import { Input } from "../../ui/Input/Input";
import {
  type SignUpFormData,
  formValidationSchema,
} from "./formValidationSchema";

export const ReactHookSignUpForm = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(formValidationSchema),
  });

  const handleSignUpFormSubmit: SubmitHandler<SignUpFormData> = (data) => {
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
        {...register("email")}
        error={errors.email}
      />
      <Input
        label="Password: "
        type="password"
        {...register("password")}
        error={errors.password}
      />
      <Input
        label="Language: "
        {...register("language")}
        error={errors.language}
      />
      <Button label="Sign up" type="submit" />
    </form>
  );
};
