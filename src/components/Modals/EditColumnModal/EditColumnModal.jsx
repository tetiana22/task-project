import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
  Icon,
} from '../EditProfileModal/EditProfileModal.styled';
import sprite from '../../../images/icons-sprite.svg';
import EditColumn from '../../EditColumn/EditColumn';

const EditColumnModal = ({ onClose, columnId }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Edit column</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Icon aria-label="bell icon">
              <use href={`${sprite}#icon-x-close`} />
            </Icon>
          </CloseModalCrossStyled>
        </ModalHeader>
        <EditColumn onClose={onClose} columnId={columnId} />
      </ModalContainer>
    </Div>
  );
};
export default EditColumnModal;
