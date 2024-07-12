import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import HeaderDashboard from 'components/Boards/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/Boards/MainDashboard/MainDashboard';
import Filter from 'components/Filter/Filter';
import { selectIsMenuOpen } from '../../redux/menu/selectors';
import { closeMenuMode } from '../../redux/menu/menuSlice';
import { Wrapper, Div } from './ScreensPage.styled';

const dark =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1720275344/xkosk1k9mub6qfc5peic.jpg';
const light =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/v1720275361/xx6y5faroqzgq3vxxuwk.jpg';
const violet =
  'https://res.cloudinary.com/ddkbhl3s4/image/upload/v1720275212/fpw7ed7f3hpymsxw0vhf.jpg';

const DefaultImages = [dark, light, violet];

const ScreensPage = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const boards = useSelector(state => state.dashboards.boards);
  const currentBoard = boards.find(board => board._id === boardId);
  const menuMode = useSelector(selectIsMenuOpen);
  const theme = useSelector(state => state.auth.userData.theme);
  const [currentBg, setCurrentBg] = useState('');

  const updateBackground = (theme, board) => {
    if (board) {
      const bg = board.background;

      if (!bg || DefaultImages.includes(bg)) {
        switch (theme) {
          case 'dark':
            setCurrentBg(dark);
            break;
          case 'light':
            setCurrentBg(light);
            break;
          case 'violet':
            setCurrentBg(violet);
            break;
          default:
            setCurrentBg(dark);
        }
      } else {
        setCurrentBg(bg);
      }
    }
  };

  useEffect(() => {
    updateBackground(theme, currentBoard);
  }, [currentBoard, theme]);

  const handleScreenClick = () => {
    if (menuMode) {
      dispatch(closeMenuMode());
    }
  };

  return (
    <Wrapper
      onClick={handleScreenClick}
      $isOpen={menuMode}
      $currentBg={currentBg}
    >
      <Div>
        <HeaderDashboard board={currentBoard} />
        <Filter />
      </Div>
      <MainDashboard board={currentBoard} />
    </Wrapper>
  );
};

export default ScreensPage;
