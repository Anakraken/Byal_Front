import { CustomButton, IconContainer } from "./ButtonStyles.styles";

type Variants = 'icon' | 'primary' | 'link';

type ButtonProps ={
  onClick?: () => void;
  disabled?: boolean;
  variant?: Variants;
  children: React.ReactNode;
  submit?: boolean;
  linewidth?: string;
  active?: boolean;
}

export const Button = ({onClick, disabled, variant, submit, active, linewidth, children, ...props}:ButtonProps ) => {
  return (
    <CustomButton
    onClick={onClick}
    disabled={disabled}
    className={!!variant && variant === "link" || 'icon' ? 'link': ''}
    type={!!submit ? 'submit' : 'button'}
    {...props}
    linewidth={linewidth}
    >
      {
        variant === 'icon' ? 
        <IconContainer active={!!active ? 'true' : ''}>{children}</IconContainer>
        :
        children || 'testing buton'
      }
      
    </CustomButton>
  )
};