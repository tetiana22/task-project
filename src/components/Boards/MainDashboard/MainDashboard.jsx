import React, { useState, useRef } from 'react';
import { ColumnTask } from '../ColumnTask/ColumnTask';
import { ContentWrapper, Wrapper } from './MainDashboard.styled';
import AddColumnModal from '../../Modals/AddColumModal/AddColumnModal';
import { useSelector } from 'react-redux';
import ButtonPlus from 'components/ButtonPlus/ButtonPlus';

const MainDashboard = () => {
  const columnLength = useSelector(state => state?.dashboards?.columnLength);
  const currentDashboard = useSelector(
    state => state?.dashboards?.currentBoardId
  );
  const columns = useSelector(state => state?.dashboards?.columnId);

  const [open, setOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const scrollRef = useRef(null);
  const [startX, setStartX] = useState(0);

  const onOpen = () => {
    setOpen(true);
    setIsDragging(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setIsDragging(true);
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
    <Wrapper length={columnLength} ref={scrollRef}>
      <ContentWrapper
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {columns &&
          columns.map(item => <ColumnTask key={item._id} item={item} />)}

        <ButtonPlus approve={true} onOpen={onOpen} text="Add column" />
      </ContentWrapper>

      {open && setIsDragging && (
        <AddColumnModal
          dashboardId={currentDashboard?._id}
          onClose={handleCloseModal}
        />
      )}
    </Wrapper>
  );
};

export default MainDashboard;
