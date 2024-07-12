import React from 'react';
import { theme } from '../../constant/theme';
import Header from '../../components/Header/Header';
import { HomePageContainer, MainContainer } from './Home.styled';
import { ThemeProvider } from 'styled-components';
import MainPg from 'pages/MainPage/MainPage';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../redux/selectors';

const HomePage = () => {
  const location = useLocation();
  const activeUserTheme = useSelector(selectTheme);

  const selectThemeIndex = () => {
    if (activeUserTheme === 'dark') {
      return 0;
    } else if (activeUserTheme === 'light') {
      return 1;
    } else if (activeUserTheme === 'violet') {
      return 2;
    }
  };

  return (
    <ThemeProvider theme={theme[selectThemeIndex()]}>
      <HomePageContainer>
        <MainContainer>
          <Header /> {location.pathname === '/home' && <MainPg />}
          <Sidebar />
          <Suspense fallback={<div>Loading....</div>}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </HomePageContainer>
    </ThemeProvider>
  );
};

export default HomePage;
