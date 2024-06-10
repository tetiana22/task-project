import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeMenuMode } from '../../redux/menu/menuSlice';
import { selectIsMenuOpen } from '../../redux/menu/selectors';
import BoardList from './BorderList/BorderList';
import AddBoardModal from '../Modals/AddBoardModal/AddBoardModal';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import {
  Aside,
  Logo,
  IconLogo,
  LogoText,
  MyBoardsText,
  AddBoardBlock,
  CreateNewBoard,
  BtnAdd,
  IconPlus,
  BtnLogOut,
  IconLogOut,
  TextLogOut,
  Backdrop,
  ContentWrapper,
} from './Sidebar.styled';
import { logoutUser } from '../../redux/authorization/authReducer';
import NeedHelpBlock from './NeedHelp/NeedHelp';

const Sidebar = ({ boardId }) => {
  const dispatch = useDispatch();
  const menuMode = useSelector(selectIsMenuOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = () => {
    dispatch(closeMenuMode());
  };

  return (
    <Backdrop $isOpen={menuMode} onClick={handleBackdropClick}>
      <Aside $isOpen={menuMode} onClick={e => e.stopPropagation()}>
        <div style={{ width: '100%' }}>
          <Logo to="/">
            <IconLogo>
              <use href={sprite + '#icon-logo'} />
            </IconLogo>
            <LogoText>Task Pro</LogoText>
          </Logo>
          <MyBoardsText>My boards</MyBoardsText>
          <AddBoardBlock>
            <CreateNewBoard onClick={handleOpen}>
              Create a new board
            </CreateNewBoard>
            <BtnAdd type="button" onClick={handleOpen}>
              <IconPlus aria-label="add icon">
                <use href={sprite + `#icon-plus`} />
              </IconPlus>
            </BtnAdd>
          </AddBoardBlock>
          <ContentWrapper>
            <BoardList />
          </ContentWrapper>
        </div>

        <div style={{ width: '100%' }}>
          <NeedHelpBlock />
          <BtnLogOut type="button" onClick={() => dispatch(logoutUser())}>
            <IconLogOut aria-label="logout icon">
              <use href={sprite + `#icon-login`} />
            </IconLogOut>
            <TextLogOut>Log out</TextLogOut>
          </BtnLogOut>
        </div>
        {isModalOpen && <AddBoardModal onClose={handleClose} />}
      </Aside>
    </Backdrop>
  );
};

export default Sidebar;
