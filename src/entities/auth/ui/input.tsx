type InputProps = {
  name: string;
  label: string;
  type?: string;
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
};

export const Input = ({ name, label, type = 'text', value, onChange, disabled }: InputProps) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
      />
    </div>
  );
};
