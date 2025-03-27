import { BaseModalContainer } from './BaseModalContainer';
import { ModalWrapper } from './ModalTypes';
import { 
  AlertContainer
} from './ModalStyles.styles';
import SuccessImg from '../../lib/icons/success.svg';
import ErrorImg from '../../lib/icons/error.svg';

export const Modal = ({onBackClick, isVisible, message , variant, children}:ModalWrapper) => {

  if (!!variant) {
   const icon = variant === 'success' ? SuccessImg : ErrorImg;

   return (
    <BaseModalContainer onBackClick={onBackClick} isVisible={isVisible}>        
      <AlertContainer>
        {!!icon && <img src={icon} alt={variant}/>}
        <h3>{message}</h3> 
      </AlertContainer>
    </BaseModalContainer>
   );
  }

  return (
    <BaseModalContainer onBackClick={onBackClick} isVisible={isVisible}>        
      {children}
    </BaseModalContainer>
  )
}