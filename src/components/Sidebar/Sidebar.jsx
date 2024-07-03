import React, { useEffect, useState } from 'react';
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

const Sidebar = () => {
  const dispatch = useDispatch();
  const menuMode = useSelector(selectIsMenuOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1440);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleBackdropClick = () => {
    if (!isWideScreen) {
      dispatch(closeMenuMode());
    }
  };

  return (
    <>
      <Backdrop
        $isOpen={menuMode && !isWideScreen}
        onClick={handleBackdropClick}
      />
      <Aside
        $isOpen={menuMode || isWideScreen}
        onClick={e => e.stopPropagation()}
      >
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
        <NeedHelpBlock />
        <BtnLogOut type="button" onClick={() => dispatch(logoutUser())}>
          <IconLogOut aria-label="logout icon">
            <use href={sprite + `#icon-login`} />
          </IconLogOut>
          <TextLogOut>Log out</TextLogOut>
        </BtnLogOut>
        {isModalOpen && <AddBoardModal onClose={handleClose} />}
      </Aside>
    </>
  );
};

export default Sidebar;
