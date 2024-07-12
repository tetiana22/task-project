import React from 'react';
import EditCard from 'components/EditCard/EditCard';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
  Icon,
} from './EditCardModal.styled';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';

const EditCardModal = ({ isOpen, onClose, cardId }) => {
  if (!isOpen) return null;
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()} >
        <ModalHeader>
          <ModalTitle>Edit card</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Icon aria-label="bell icon">
              <use href={`${sprite}#icon-x-close`} />
            </Icon>
          </CloseModalCrossStyled>
        </ModalHeader>
        <EditCard onClose={onClose} cardId={cardId} />
      </ModalContainer>
    </Div>
  );
};

export default EditCardModal;
