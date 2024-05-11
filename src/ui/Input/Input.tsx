import { type ComponentPropsWithRef, forwardRef, type Ref, useId } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label: string;
  className?: string;
  error?: FieldError;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, error, ...props }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className="mb-2">
        <label htmlFor={id} className="mr-2">
          {label}
        </label>
        <input id={id} ref={ref} {...props} />
        {error && <p className="text-sm text-red-500">{error.message}</p>}
      </div>
    );
  }
);
