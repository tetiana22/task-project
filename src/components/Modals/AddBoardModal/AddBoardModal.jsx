import React from 'react';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
} from '../EditProfileModal/EditProfileModal.styled';
import { Close } from 'assets/fonts/images/icons/Close';
import AddBoard from 'components/AddBoard/AddBoard';

const AddBoardModal = ({ onClose }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>New board</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <AddBoard />
      </ModalContainer>
    </Div>
  );
};

export default AddBoardModal;
