import NeedHelp from 'components/NeedHelp/NeedHelp';

import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
  Icon,
} from '../EditProfileModal/EditProfileModal.styled';
import sprite from '../../../images/icons-sprite.svg';

const NeedHelpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Need help</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Icon aria-label="bell icon">
              <use href={`${sprite}#icon-x-close`} />
            </Icon>
          </CloseModalCrossStyled>
        </ModalHeader>
        <NeedHelp onClose={onClose} />
      </ModalContainer>
    </Div>
  );
};

export default NeedHelpModal;
