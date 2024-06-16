type Props = {
  children: string | string[];
};

export const Text = ({ children }: Props) => {
  return (
    <p className="dark:text-slate-200 text-sm font-light px-4 py-2">
      {children}
    </p>
  );
};
