import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BoardItem from '../BordItem/BordItem';
import { List } from './BorderList.styled';
import {
  getAllDashboards,
  deleteDashboard,
} from '../../../redux/cards/cardsReducers';
import { closeMenuMode } from '../../../redux/menu/menuSlice';
import { useRef, useState } from 'react';
import EditBoard from 'components/EditBoard/EditBoard';

const BoardList = () => {
  const boards = useSelector(state => state.dashboards.boards);
  const dispatch = useDispatch();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const listRef = useRef(null);
  const isMouseDownRef = useRef(false);
  const lastClientYRef = useRef(0);

  useEffect(() => {
    dispatch(getAllDashboards());
  }, [dispatch]);

  const switchActiveProject = index => {
    setActiveProjectIndex(index);
  };

  const handleActiveProject = index => {
    switchActiveProject(index);
    dispatch(closeMenuMode());
  };

  const handleMouseDown = event => {
    isMouseDownRef.current = true;
    lastClientYRef.current = event.clientY;
  };

  const handleMouseUp = () => {
    isMouseDownRef.current = false;
  };

  const handleMouseMove = event => {
    if (!isMouseDownRef.current || event.buttons !== 1) return;

    const delta = (event.clientY - lastClientYRef.current) * 4;
    lastClientYRef.current = event.clientY;

    if (listRef.current) {
      listRef.current.scrollTop += delta;
    }
  };

  const handleDeleteBoard = boardId => {
    dispatch(deleteDashboard(boardId));
  };
  const handleEditBoard = boardId => {
    dispatch(EditBoard(boardId));
  };

  return (
    <div>
      {boards.length > 0 && (
        <List
          ref={listRef}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {boards.map((board, index) => (
            <BoardItem
              key={board._id}
              board={board}
              index={index}
              onActive={handleActiveProject}
              activeProjectIndex={activeProjectIndex}
              onDelete={handleDeleteBoard}
              boardId={board._id}
              onEdit={handleEditBoard}
            />
          ))}
        </List>
      )}
    </div>
  );
};

export default BoardList;
