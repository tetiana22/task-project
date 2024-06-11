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
  const avatarURL = useSelector(state => state.avatarURL);
  const theme = useSelector(state => state.auth.theme);
  const userData = useSelector(selectUserData);
  const userEmail = userData?.email ?? 'Sign in';
  const userEmailSplit = userEmail.split('@')[0];
  const userName = userData?.userName;
  const userAvatar = userData?.avatarURL;

  const menuMode = useSelector(selectIsMenuOpen);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log('Rendering Header');

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
        {console.log('UserLogoContainer rendered')}
        {userName ? (
          <div>
            <UserNameText>{userName}</UserNameText>
          </div>
        ) : (
          <div>{userEmailSplit}</div>
        )}
        {userAvatar ? (
          <Avatar src={userAvatar} alt="userPhoto" />
        ) : (
          <Ava
            src={avatarURL || (theme === 'light' ? userLight : userDark)}
            alt="Avatar"
          />
        )}
      </UserLogoContainer>
      {isModalOpen && <EditProfileModal onClose={closeModal} />}
    </HeaderSection>
  );
};

export default Header;
