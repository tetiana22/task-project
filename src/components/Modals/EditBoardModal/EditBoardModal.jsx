import EditBoard from 'components/EditBoard/EditBoard';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
  Icon,
} from '../EditProfileModal/EditProfileModal.styled';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';

const EditBoardModal = ({ isOpen, onClose, boardId }) => {
  if (!isOpen) return null;
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Edit board</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Icon aria-label="bell icon">
              <use href={`${sprite}#icon-x-close`} />
            </Icon>
          </CloseModalCrossStyled>
        </ModalHeader>
        <EditBoard onClose={onClose} boardId={boardId} />
      </ModalContainer>
    </Div>
  );
};
export default EditBoardModal;
