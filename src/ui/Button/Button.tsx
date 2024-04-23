type Props = {
  label: string;
  onClick: () => void;
};

export const Button = ({ label, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1 font-semibold text-gray-100 bg-blue-500 border border-gray-300 rounded-md"
    >
      {label}
    </button>
  );
};
