import React, { useState } from 'react';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';
import { useDispatch } from 'react-redux';
import EditColumnModal from 'components/Modals/EditColumnModal/EditColumnModal';
import {
  IconDel,
  IconsBlock,
  IconEdit,
} from 'components/Sidebar/BordItem/BordItem.styled';
import { deleteColumn } from '../../../redux/cards/cardsReducers';
import { Column, Wrap, Title } from './ColumnItem.styled';

const ColumnItem = ({ column, columnId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <Wrap>
      <Column>
        <Title>{column.title}</Title>

        <IconsBlock>
          <IconEdit aria-label="edit icon" onClick={handleOpen}>
            <use href={sprite + `#icon-pencil`} />
          </IconEdit>
          {open && (
            <EditColumnModal onClose={handleClose} columnId={columnId} />
          )}

          <IconDel
            aria-label="delit icon"
            onClick={() => {
              dispatch(deleteColumn(columnId));
            }}
          >
            <use href={sprite + `#icon-trash`} />
          </IconDel>
        </IconsBlock>
      </Column>
    </Wrap>
  );
};

export default ColumnItem;
