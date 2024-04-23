import { type ComponentProps } from "react";
import { classNames } from "../../utils/classNames";

type Props = {
  label: string;
  className?: string;
  onClick: () => void;
} & ComponentProps<"button">;

export const Button = ({
  label,
  className,
  onClick,
  disabled,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(
        "px-4 py-1 font-normal text-gray-100 bg-blue-500 border border-gray-300 rounded-md cursor-pointer hover:bg-blue-600 disabled:text-gray-300 disabled:bg-gray-500",
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};
