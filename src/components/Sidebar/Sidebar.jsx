import React, { useState } from 'react'; // Додайте імпорт useState
import { useSelector, useDispatch } from 'react-redux'; // Додайте імпорт useSelector та useDispatch
import { closeMenuMode } from '../../redux/menu/menuSlice';
// import { selectTheme } from '../../redux/selectors';
import { selectIsMenuOpen } from '../../redux/menu/selectors';
import BoardList from './BorderList/BorderList';
// import NeedHelpBlock from 'components/Sidebar/NeedHelpBlock/NeedHelpBlock';
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
} from './Sidebar.styled';
import { logoutUser } from '../../redux/authorization/authReducer';

const Sidebar = () => {
  const dispatch = useDispatch();
  //   const activeUserTheme = useSelector(selectTheme);
  const menuMode = useSelector(selectIsMenuOpen);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleBackdropClick = () => {
    dispatch(closeMenuMode()); // Закриваємо Sidebar при кліку на фон
  };
  //   const setIconLogo = () => {
  //     if (activeUserTheme === 'dark' || activeUserTheme === 'light') {
  //       return '#icon-logo';
  //     } else if (activeUserTheme === 'violet') {
  //       return '#icon-logo-violet';
  //     }
  //   };

  return (
    <Backdrop isOpen={menuMode} onClick={handleBackdropClick}>
      <Aside isOpen={menuMode} onClick={e => e.stopPropagation()}>
        <div style={{ width: '100%' }}>
          <Logo>
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
          <BoardList />
        </div>

        <div style={{ width: '100%' }}>
          {/* <NeedHelpBlock /> */}

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
