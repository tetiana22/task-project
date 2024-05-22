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
import CardList from '../CardList/CardList';
import AddCardModal from 'components/Modals/AddCardModal/AddCardModal';
import ButtonPlus from 'components/ButtonPlus/ButtonPlus';

const ColumnItem = ({ column, columnId, boardId }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [openCard, setOpenCard] = useState(false);

  const handleOpenCard = () => {
    setOpenCard(true);
  };
  const handleCloseCard = () => {
    setOpenCard(false);
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
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
        <CardList columnTitle={column.title} column={column} />
        <ButtonPlus
          approve={true}
          text="Add anotner card"
          onOpen={handleOpenCard}
        />
        {openCard && (
          <AddCardModal
            onClose={handleCloseCard}
            boardId={boardId}
            columnId={columnId}
          />
        )}
      </Wrap>
    </>
  );
};

export default ColumnItem;
