import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Assuming these are action creators
import {
  deleteColumn,
  deleteDashboard,
  getDashboardById,
} from '../../../redux/cards/cardsReducers'; // Assuming this is an action creator
import { useNavigate } from 'react-router-dom';
import { closeMenuMode } from '../../../redux/menu/menuSlice';
import EditBoardModal from 'components/Modals/EditBoardModal/EditBoardModal';
import sprite from '../../../assets/fonts/images/icons/icons-sprite.svg';
import {
  Board,
  BoardIcon,
  BoardTitle,
  IconsBlock,
  IconEdit,
  IconDel,
  StyledLink,
} from './BordItem.styled';

const BoardItem = ({ board, index, onActive, activePojectIndex }) => {
  const dispatch = useDispatch();
  const currBoardId = useSelector(state => state.currentBoardId);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const handleNavigate = e => {
    if (e.target.dataset.icon) {
      return; // If the click is on an icon, return early
    }
    navigate(`/home/${board._id}`);

    dispatch(closeMenuMode());
    if (board._id !== currBoardId) {
      dispatch(deleteColumn());
    }
  };

  const checkTextLength = text => {
    const str = text.split('');

    if (str.length <= 10) {
      return str.join('');
    }
    return str.splice(0, 10).join('') + '...';
  };

  const handleDragStart = event => {
    event.preventDefault();
  };

  const handleContextMenu = event => {
    event.preventDefault();
  };

  return (
    <>
      <li
        name={board._id}
        // onClick={handleNavigate}

        className={activePojectIndex === index ? 'active' : ''}
        draggable={false}
        onDragStart={handleDragStart}
        onContextMenu={handleContextMenu}
      >
        <StyledLink to={`${board.title}`}>
          {' '}
          <Board>
            <BoardIcon className={activePojectIndex === index ? 'active' : ''}>
              <use href={sprite + board.icon} />
            </BoardIcon>
            <BoardTitle
              onClick={() => {
                onActive(index);
                dispatch(closeMenuMode());
                dispatch(getDashboardById(board._id));
              }}
              className={activePojectIndex === index ? 'active' : ''}
            >
              {checkTextLength(board.title)}
            </BoardTitle>
          </Board>{' '}
          <IconsBlock>
            <IconEdit aria-label="edit icon" onClick={handleOpen}>
              <use href={sprite + `#icon-pencil`} />
            </IconEdit>
            <EditBoardModal onClose={handleClose} isOpen={open} />
            <IconDel
              aria-label="delit icon"
              onClick={() => {
                dispatch(deleteDashboard(board._id));
              }}
            >
              <use href={sprite + `#icon-trash`} />
            </IconDel>
          </IconsBlock>
        </StyledLink>
      </li>
    </>
  );
};

export default BoardItem;
