import React from 'react';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
} from '../EditProfileModal/EditProfileModal.styled';
import { Close } from 'assets/fonts/images/icons/Close';

import AddCard from 'components/AddCard/AddCard';

const AddCardModal = ({ onClose, boardId, columnId }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Add Card</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <AddCard boardId={boardId} columnId={columnId} onClose={onClose} />
      </ModalContainer>
    </Div>
  );
};

export default AddCardModal;
