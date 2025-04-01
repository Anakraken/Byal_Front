type CheckBoxProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}

  export const CheckBox = ({onChange, label }:CheckBoxProps) => {
    const formattedName = label.replace(/\s+/g, "_").toLowerCase();

    return(
      <div className="checkbox">
      <input 
      type='checkbox' 
      onChange={onChange} 
      id={formattedName }
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") { // 🔥 Detecta Enter o Space
          e.preventDefault(); // 🚫 Evita que el formulario se envíe
          e.currentTarget.click(); // 🔥 Simula un clic en el checkbox
        }
      }}
      /> 
      <label htmlFor={formattedName }>
      { " " + label}
      </label>
    </div>
    );
  };