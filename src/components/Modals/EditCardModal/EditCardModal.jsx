import React from 'react';
import EditCard from 'components/EditCard/EditCard';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
} from './EditCardModal.styled';
import { Close } from 'assets/fonts/images/icons/Close';

const EditCardModal = ({ isOpen, onClose, cardId }) => {
  if (!isOpen) return null;
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Edit card</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <EditCard onClose={onClose} cardId={cardId} />
      </ModalContainer>
    </Div>
  );
};

export default EditCardModal;
