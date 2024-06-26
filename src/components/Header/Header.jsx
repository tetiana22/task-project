import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Burger from 'assets/fonts/images/icons/Burger';
import EditProfileModal from 'components/Modals/EditProfileModal/EditProfileModal';
import {
  HeaderSection,
  BurgerBtn,
  Avatar,
  UserLogoContainer,
  UserNameText,
  Ava,
} from './Header.styled';
import { selectUserData } from '../../redux/selectors';
import userLight from '../../assets/fonts/images/userLogo/userLight.jpg';
import userDark from '../../assets/fonts/images/userLogo/userDark.jpg';
import { openMenuMode } from '../../redux/menu/menuSlice';
import { selectIsMenuOpen } from '../../redux/menu/selectors';

const Header = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userData = useSelector(selectUserData);
  const avatarURL = userData?.avatarURL;
  const theme = useSelector(state => state.auth.theme);
  const userEmail = userData?.email;
  const userEmailSplit = userEmail?.split('@')[0];
  const userName = userData?.name;
  const menuMode = useSelector(selectIsMenuOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <HeaderSection>
      <BurgerBtn
        type="button"
        onClick={() => dispatch(openMenuMode())}
        $isOpen={menuMode}
      >
        <Burger width={24} height={24} fillColor={'#161616'} />
      </BurgerBtn>

      <UserLogoContainer onClick={openModal}>
        {userName ? (
          <div>
            <UserNameText>{userName}</UserNameText>
          </div>
        ) : (
          <div>{userEmailSplit}</div>
        )}
        {avatarURL ? (
          <Avatar src={avatarURL} alt="userPhoto" />
        ) : (
          <Ava src={theme === 'light' ? userLight : userDark} alt="Avatar" />
        )}
      </UserLogoContainer>
      {isModalOpen && <EditProfileModal onClose={closeModal} />}
    </HeaderSection>
  );
};

export default Header;
