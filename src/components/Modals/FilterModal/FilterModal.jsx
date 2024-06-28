import FilterSettings from 'components/Filter/FilterSettings/FilterSettings';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
} from '../EditProfileModal/EditProfileModal.styled';
import { Close } from 'assets/fonts/images/icons/Close';

const FilterModal = ({ onClose }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Filter</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Close />
          </CloseModalCrossStyled>
        </ModalHeader>
        <FilterSettings onClose={onClose} />
      </ModalContainer>
    </Div>
  );
};

export default FilterModal;
