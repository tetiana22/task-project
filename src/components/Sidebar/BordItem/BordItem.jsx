import React, { useState } from 'react';
import { deleteDashboard } from '../../../redux/cards/cardsReducers';
import { closeMenuMode } from '../../../redux/menu/menuSlice';
import EditBoardModal from 'components/Modals/EditBoardModal/EditBoardModal';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Board,
  BoardIcon,
  BoardTitle,
  IconsBlock,
  IconEdit,
  IconDel,
  StyledLink,
} from './BordItem.styled';
import { setCurrentBoardId } from '../../../redux/cards/cardsSlice';

const BoardItem = ({ boardId, index, onActive, activePojectIndex, board }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleNavigate = e => {
    if (e.dataset === 'icon') {
      return;
    }
    navigate(`/home/${board._id}`);
    dispatch(setCurrentBoardId(board._id));
  };
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 10) {
      return str.join('');
    }
    return str.splice(0, 10).join('') + '...';
  };

  return (
    <>
      <Board>
        <StyledLink to={`/home/${boardId}`}>
          <BoardIcon className={activePojectIndex === index ? 'active' : ''}>
            <use href={sprite + board.icon} />
          </BoardIcon>

          <BoardTitle
            onClick={e => {
              onActive(boardId);
              dispatch(closeMenuMode());
              handleNavigate(e);
            }}
            className={activePojectIndex === index ? 'active' : ''}
          >
            {checkTextLength(board.title)}
          </BoardTitle>
        </StyledLink>
        <IconsBlock>
          <IconEdit aria-label="edit icon" onClick={handleOpen}>
            <use href={sprite + `#icon-pencil`} />
          </IconEdit>
          <EditBoardModal
            onClose={handleClose}
            isOpen={open}
            boardId={boardId}
          />

          <IconDel
            aria-label="delit icon"
            onClick={() => {
              dispatch(deleteDashboard(board._id));
            }}
          >
            <use href={sprite + `#icon-trash`} />
          </IconDel>
        </IconsBlock>
      </Board>
    </>
  );
};

export default BoardItem;