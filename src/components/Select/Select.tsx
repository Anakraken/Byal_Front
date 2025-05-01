import React, { useState } from "react";
import { SelectContainer } from "./SelectStyles.styles";

type SelectProps = {
  options: string[];
  label?: string;
  onSelect: (value: string) => void;
  error?: boolean;
  message?: string;
  name: string;
};

export const Select = ({
  options,
  label,
  onSelect,
  error,
  message,
  name,
}: SelectProps) => {
  const [selected, setSelected] = useState("");

  const formattedName = name.replace(/\s+/g, "_").toLowerCase();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    onSelect(value);
  };

  return (
    <SelectContainer error={error?.toString()}>
      <div className="select">
        <select
          id={formattedName}
          name={name}
          value={selected}
          onChange={handleChange}
          className="select_input"
        >
          <option value="" disabled hidden>
            {label}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor={formattedName} className="select_label">
          {label}
        </label>
        <span className="select_arrow" />
      </div>

      {!!error && <p className="error">{message}</p>}
    </SelectContainer>
  );
};