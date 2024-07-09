// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
  Icon,
} from '../EditProfileModal/EditProfileModal.styled';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';
import AddColumn from 'components/AddColumn/AddColumn';
const AddColumModal = ({ onClose, boardId }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Add column</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Icon aria-label="bell icon">
              <use href={`${sprite}#icon-x-close`} />
            </Icon>
          </CloseModalCrossStyled>
        </ModalHeader>
        <AddColumn boardId={boardId} onClose={onClose} />
      </ModalContainer>
    </Div>
  );
};
export default AddColumModal;
