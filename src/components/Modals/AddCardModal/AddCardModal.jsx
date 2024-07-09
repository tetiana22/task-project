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

import AddCard from 'components/AddCard/AddCard';

const AddCardModal = ({ onClose, boardId, columnId }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Add Card</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Icon aria-label="bell icon">
              <use href={`${sprite}#icon-x-close`} />
            </Icon>
          </CloseModalCrossStyled>
        </ModalHeader>
        <AddCard boardId={boardId} columnId={columnId} onClose={onClose} />
      </ModalContainer>
    </Div>
  );
};

export default AddCardModal;
