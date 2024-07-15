import React, { useState } from 'react';
import { ContentWrapper, Wrapper } from './MainDashboard.styled';
import AddColumnModal from '../../Modals/AddColumModal/AddColumnModal';
import ButtonPlus from 'components/ButtonPlus/ButtonPlus';
import ColumnList from '../ColumnList/ColumnList';

const MainDashboard = ({ board }) => {
  const [open, setOpen] = useState(false);

  if (!board) return null;

  const boardId = board._id;
  const onOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <ColumnList boardId={boardId} />
        <ButtonPlus approve={true} onOpen={onOpen} text="Add column" />
      </ContentWrapper>

      {open && <AddColumnModal onClose={handleCloseModal} boardId={boardId} />}
    </Wrapper>
  );
};

export default MainDashboard;
