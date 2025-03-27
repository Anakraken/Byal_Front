export type ModalProps = {
  onBackClick: ()=> void;
  isVisible: boolean;
  children?: React.ReactNode;
  }


  type Variant = 'success' | 'error';
  export type ModalWrapper = ModalProps & {
    message?: string;
    variant ?: Variant;
  }