import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
} from '../EditProfileModal/EditProfileModal.styled';
import { Close } from 'assets/fonts/images/icons/Close';
// import { Modal } from '../../mainModal/MainModal';
import EditProfile from 'components/EditProfile/EditProfile';

const EditProfileModal = ({ onClose }) => {
  return (
    // <Modal modalId={modalNames.EDIT_PROFILE}>
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Edit profile</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <EditProfile />
      </ModalContainer>
    </Div>
    // </Modal>
  );
};

export default EditProfileModal;
