import { type ComponentPropsWithRef, forwardRef, type Ref, useId } from "react";

type Props = {
  label: string;
  className?: string;
} & ComponentPropsWithRef<"input">;

export const Input = forwardRef(
  ({ label, ...props }: Props, ref: Ref<HTMLInputElement>) => {
    const id = useId();
    return (
      <div className="mb-2">
        <label htmlFor={id} className="mr-2">
          {label}
        </label>
        <input id={id} ref={ref} {...props} />
      </div>
    );
  }
);
