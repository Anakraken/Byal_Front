import { CustomButton } from "./ButtonStyles.styles";

type Variants = 'outline' | 'primary' | 'link';

type ButtonProps ={
  onClick: () => void;
  disabled?: boolean;
  variant?: Variants;
  children: React.ReactNode;
}

export const Button = ({onClick, disabled, variant, children, ...props}:ButtonProps ) => {

  return (
    <CustomButton
    onClick={onClick}
    disabled={disabled}
    className={!!variant && variant === "link" ? 'link': ''}
    {...props}
    >
      {children || 'testing buton'}
    </CustomButton>
  )
};