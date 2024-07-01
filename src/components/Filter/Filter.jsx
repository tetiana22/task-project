import { Icon, Text, Wrapper } from './Filter.styled';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';

import { useState } from 'react';

import FilterModal from 'components/Modals/FilterModal/FilterModal';

const Filter = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Wrapper onClick={handleOpen}>
        <Icon>
          <use href={sprite + '#icon-filter'} />
        </Icon>

        <Text>Filters</Text>
      </Wrapper>
      {open && <FilterModal onClose={handleClose} />}
    </>
  );
};

export default Filter;
