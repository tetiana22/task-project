import React, { useState, useRef } from 'react';

import { ContentWrapper, Wrapper } from './MainDashboard.styled';
import AddColumnModal from '../../Modals/AddColumModal/AddColumnModal';

import ButtonPlus from 'components/ButtonPlus/ButtonPlus';

import ColumnList from '../ColumnList/ColumnList';

const MainDashboard = ({ board }) => {
  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const boardId = board._id;
  console.log(boardId);
  const scrollRef = useRef(null);
  const [startX, setStartX] = useState(0);

  const onOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleMouseDown = e => {
    if (e.button === 0) {
      const target = e.target.tagName.toLowerCase();
      if (target !== 'input' && target !== 'textarea') {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
      }
    }
  };

  const handleMouseMove = e => {
    if (!isDragging || open) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.05;
    scrollRef.current.scrollLeft = scrollRef.current.scrollLeft - walk;
  };

  const handleMouseUp = e => {
    if (e.button === 0) {
      setIsDragging(false);
    }
  };

  return (
    <Wrapper>
      <ContentWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <ColumnList boardId={boardId} />
        <ButtonPlus approve={true} onOpen={onOpen} text="Add column" />
      </ContentWrapper>

      {open && <AddColumnModal onClose={handleCloseModal} boardId={boardId} />}
    </Wrapper>
  );
};

export default MainDashboard;
