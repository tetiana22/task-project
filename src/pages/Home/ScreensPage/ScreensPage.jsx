import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HeaderDashboard from 'components/Boards/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/Boards/MainDashboard/MainDashboard';
import { selectIsMenuOpen } from '../../../redux/menu/selectors';
import { closeMenuMode } from '../../../redux/menu/menuSlice';
import { Wrapper } from './ScreensPage.styled';
import { useParams } from 'react-router-dom';

const ScreensPage = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const boards = useSelector(state => state.dashboards.boards);
  const currentBoard = boards.find(board => board._id === boardId);
  const currentBg = currentBoard ? currentBoard.background : '';
  const menuMode = useSelector(selectIsMenuOpen);

  const handleScreenClick = () => {
    if (menuMode) {
      dispatch(closeMenuMode());
    }
  };

  return (
    <Wrapper
      onClick={handleScreenClick}
      $isOpen={menuMode}
      currentBg={currentBg}
    >
      <HeaderDashboard board={currentBoard} />

      <MainDashboard board={currentBoard} />
    </Wrapper>
  );
};

export default ScreensPage;
