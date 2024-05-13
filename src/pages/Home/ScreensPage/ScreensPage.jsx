import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import HeaderDashboard from 'components/Boards/HeaderDashboard/HeaderDashboard';
import MainDashboard from 'components/Boards/MainDashboard/MainDashboard';
import { selectIsMenuOpen } from '../../../redux/menu/selectors';
import { closeMenuMode } from '../../../redux/menu/menuSlice';
import { Wrapper } from './ScreensPage.styled';

const ScreensPage = () => {
  const dispatch = useDispatch();
  const menuMode = useSelector(selectIsMenuOpen);
  const currentBg = useSelector(state => state?.dashboards?.currentBg);
  const currentName = useSelector(state => state?.dashboards?.currentName);

  const handleScreenClick = () => {
    if (menuMode) {
      dispatch(closeMenuMode());
    }
  };

  return (
    <Wrapper onClick={handleScreenClick} bgcUrl={currentBg} isOpen={menuMode}>
      <HeaderDashboard children={currentName} />

      <MainDashboard />
    </Wrapper>
  );
};

export default ScreensPage;
