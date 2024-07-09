import React from 'react';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
  Icon,
} from '../EditProfileModal/EditProfileModal.styled';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';
import AddBoard from 'components/AddBoard/AddBoard';

const AddBoardModal = ({ onClose }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>New board</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Icon aria-label="bell icon">
              <use href={`${sprite}#icon-x-close`} />
            </Icon>
          </CloseModalCrossStyled>
        </ModalHeader>
        <AddBoard onClose={onClose} />
      </ModalContainer>
    </Div>
  );
};

export default AddBoardModal;
