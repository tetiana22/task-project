import React, { useState } from 'react';
import { Container, Link, TextBox } from './Board.styled';
import AddBoardModal from 'components/Modals/AddBoardModal/AddBoardModal';
import { selectIsMenuOpen } from '../../../redux/menu/selectors';
import { useSelector } from 'react-redux';

const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuMode = useSelector(selectIsMenuOpen);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Container $isOpen={menuMode}>
        <TextBox>
          Before starting your project, it is essential{' '}
          <Link onClick={openModal}>to create a board</Link> to visualize and
          track all the necessary tasks and milestones. This board serves as a
          powerful tool to organize the workflow and ensure effective
          collaboration among team members.
        </TextBox>
      </Container>
      {isModalOpen && <AddBoardModal onClose={closeModal} />}
    </>
  );
};

export default Board;
