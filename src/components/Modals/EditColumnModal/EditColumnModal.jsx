// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
} from '../EditProfileModal/EditProfileModal.styled';
import { Close } from 'assets/fonts/images/icons/Close';
import EditColumn from '../../EditColumn/EditColumn';

const EditColumnModal = ({ onClose }) => {
  return (
    // <Modal modalId={modalNames.EDIT_COLUMN}>
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Edit column</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <EditColumn />
      </ModalContainer>
    </Div>
    // </Modal>
  );
};
export default EditColumnModal;
