import ReactDOM from 'react-dom';
import { ModalProps } from './ModalTypes';
import { Overlay, ModalCard, CloseBtn, ClosebtnContainer } from './ModalStyles.styles';


export const BaseModalContainer = ({onBackClick, isVisible, children}:ModalProps) => {
  if(!isVisible) return null;

  return ReactDOM.createPortal(
    <Overlay onClick={onBackClick}>
      <ModalCard onClick={e=> e.stopPropagation()}>
        <ClosebtnContainer>
          <CloseBtn onClick={onBackClick}><div className='close'></div></CloseBtn>
          </ClosebtnContainer>
        {children}
      </ModalCard>
    </Overlay>, document.getElementById('modal-root')!)
}