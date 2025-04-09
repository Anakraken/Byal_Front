type RadioButtonProps = {
  name: string;
  value: string | number;
  checked: boolean;
  handleRadio: (value: string | number)=>void;
}

export const RadioButton = ({name, value, checked, handleRadio, ...props}:RadioButtonProps) => {

  return(
<div>
  <input 
  type="radio"
  name={name}
  value={value}
  checked={checked}
  onChange={()=>handleRadio(value)}
  {...props}
  />
  <label onClick={()=>handleRadio(value)}>{value}</label>
</div>
  )
}