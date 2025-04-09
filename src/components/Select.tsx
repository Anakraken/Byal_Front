import { useState } from "react";

type SelectProps = {
  options: string[];
  label?: string;
  onSelect: (value: string) => void; 
};

export const Select = ({ options, label, onSelect }: SelectProps) => {
  const [selected, setSelected] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value);
  };

  return (
    <div className="w-full">
      {label && <label>{label}</label>}
      <select
        value={selected}
        onChange={handleChange}
      >
        <option value="" disabled>
          Select an option
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};