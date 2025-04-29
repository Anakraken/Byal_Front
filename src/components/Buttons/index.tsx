import { CustomButton, IconContainer,PrimaryButton } from "./ButtonStyles.styles";

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
 
  if(variant === 'link') return (
    <CustomButton
    onClick={onClick}
    disabled={disabled}
    className={"link"}
    type={!!submit ? 'submit' : 'button'}
    linewidth={linewidth}
    {...props}
    >
      {children}
      
    </CustomButton>
  )

  if(variant === 'icon')return (
    <CustomButton
    onClick={onClick}
    disabled={disabled}
    className={'link'}
    type={!!submit ? 'submit' : 'button'}
    linewidth={linewidth}
    {...props}
    >
      {
        <IconContainer active={!!active ? 'true' : ''}>
          {children}
        </IconContainer>
      }
      
    </CustomButton>
  )

  return(
    <PrimaryButton
    onClick={onClick}
    disabled={disabled}
    type={!!submit ? 'submit' : 'button'}
    {...props}
    >
      {children}
    </PrimaryButton>
  )
};