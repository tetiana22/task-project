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
import AddColumn from 'components/AddColumn/AddColumn';
const AddColumModal = ({ onClose }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Add column</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <AddColumn />
      </ModalContainer>
    </Div>
  );
};
export default AddColumModal;
