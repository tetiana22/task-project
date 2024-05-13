import React from 'react';

import { useTheme } from '@mui/material';
import Header from '../Header/Header';
import { HomePageContainer, MainContainer } from './Home.styled';
import { ThemeProvider } from 'styled-components';
import Board from 'components/StartBoard/Board/Board';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
const HomePage = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <Sidebar />
      <HomePageContainer>
        <MainContainer>
          <Header /> {location.pathname === '/home' && <Board />}
          {/* В outlet БУДЕ РЕНДЕРИТИСЯ БОРД */}
          <Suspense fallback={<div>Loading....</div>}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </HomePageContainer>
    </ThemeProvider>
  );
};

export default HomePage;
