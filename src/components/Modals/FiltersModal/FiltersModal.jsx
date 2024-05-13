// import { Modal } from '../../mainModal/MainModal';
// import { modalNames } from '../../../constant/constant';
import RadioFilters from 'shared/components/radioButtons/RadioFilters';
import { CloseModalCross } from '../../mainModal/CloseModal';
import { ModalTitle } from '../EditProfileModal/EditProfileModal.styled';
import { FormStyled, BoxStyled, SubtitleStyled } from './FiltersModal.styled';

const FiltersModal = ({ onClose, onClick }) => {
  let priority = '';
  return (
    //<Modal modalId={modalNames.FILTER_MODAL}>
    <>
      <ModalTitle>Filters</ModalTitle>
      <CloseModalCross />
      <FormStyled>
        <BoxStyled>
          <SubtitleStyled>Label color</SubtitleStyled>
        </BoxStyled>
        <RadioFilters
          onFilterChange={() => priority}
          onModalClose={onClose}
          onClick={onClick}
        />
      </FormStyled>
    </>

    //</Modal>
  );
};

export default FiltersModal;