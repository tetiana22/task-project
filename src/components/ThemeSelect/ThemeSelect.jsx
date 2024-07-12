import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { theme } from '../../constant/theme';
import {
  Icon,
  PopupBlock,
  PopupItem,
  Text,
  Wrapper,
} from './ThemeSelect.styled';
import sprite from '../../images/icons-sprite.svg';
import { changeTheme } from '../../redux/authorization/authReducer';

const ThemePicker = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.userData);
  const [currentTheme, setCurrentTheme] = useState(user.theme);
  const [isShownPopup, setIsShownPopup] = useState(false);
  const themeRef = useRef();

  const handleTheme = (e, theme) => {
    e.stopPropagation();
    dispatch(changeTheme({ theme }));
    setCurrentTheme(theme);
  };

  const handleOutsideClick = event => {
    if (themeRef.current && !themeRef.current.contains(event.target)) {
      setIsShownPopup(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handlePopup = e => {
    e.stopPropagation();
    setIsShownPopup(!isShownPopup);
  };

  return (
    <Wrapper ref={themeRef} onClick={handlePopup}>
      <Text>Theme</Text>
      <Icon $isOpen={isShownPopup}>
        <use href={sprite + '#icon-chevron-down'} />
      </Icon>
      {isShownPopup && (
        <PopupBlock onClick={e => e.stopPropagation()}>
          {theme.map(({ name }) => (
            <PopupItem
              onClick={e => handleTheme(e, name)}
              key={name}
              className={currentTheme === name ? 'active' : ''}
            >
              {name[0].toUpperCase() + name.slice(1)}
            </PopupItem>
          ))}
        </PopupBlock>
      )}
    </Wrapper>
  );
};

export default ThemePicker;
