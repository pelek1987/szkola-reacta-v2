type Props = {
  children: string;
};

export const Text = ({ children }: Props) => {
  return <p className="text-sm font-light px-4 py-2">{children}</p>;
};
