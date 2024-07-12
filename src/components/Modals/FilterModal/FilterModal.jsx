import FilterSettings from 'components/Filter/FilterSettings/FilterSettings';
import {
  Div,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseModalCrossStyled,
  Icon,
} from '../EditCardModal/EditCardModal.styled';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';

const FilterModal = ({ onClose }) => {
  return (
    <Div onClick={onClose}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Filter</ModalTitle>
          <CloseModalCrossStyled type="button" onClick={onClose}>
            <Icon aria-label="bell icon">
              <use href={`${sprite}#icon-x-close`} />
            </Icon>
          </CloseModalCrossStyled>
        </ModalHeader>
        <FilterSettings onClose={onClose} />
      </ModalContainer>
    </Div>
  );
};

export default FilterModal;
