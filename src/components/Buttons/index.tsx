import { CustomButton } from "./ButtonStyles.styles";

type Variants = 'outline' | 'primary' | 'link';

type ButtonProps ={
  onClick?: () => void;
  disabled?: boolean;
  variant?: Variants;
  children: React.ReactNode;
  submit?: boolean;
  linewidth?: string;
}

export const Button = ({onClick, disabled, variant, submit, linewidth, children, ...props}:ButtonProps ) => {

  return (
    <CustomButton
    onClick={onClick}
    disabled={disabled}
    className={!!variant && variant === "link" ? 'link': ''}
    type={!!submit ? 'submit' : 'button'}
    {...props}
    linewidth={linewidth}
    >
      {children || 'testing buton'}
    </CustomButton>
  )
};