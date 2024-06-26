import NeedHelp from 'components/NeedHelp/NeedHelp';
import { Close } from 'assets/fonts/images/icons/Close';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
} from '../EditProfileModal/EditProfileModal.styled';

const NeedHelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Need help</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <NeedHelp onClose={onClose} />
      </ModalContainer>
    </Div>
  );
};

export default NeedHelpModal;
