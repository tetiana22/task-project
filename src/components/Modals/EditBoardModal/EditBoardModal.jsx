// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';

import EditBoard from 'components/EditBoard/EditBoard';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
} from '../EditProfileModal/EditProfileModal.styled';
import { Close } from 'assets/fonts/images/icons/Close';

const EditBoardModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    // <Modal modalId={modalNames.EDIT_BOARD}>
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Edit board</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <EditBoard />
      </ModalContainer>
    </Div>
    // </Modal>
  );
};
export default EditBoardModal;
