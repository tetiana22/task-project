import React from 'react';

import { useTheme } from '@mui/material';
import Header from '../../components/Header/Header';
import { HomePageContainer, MainContainer } from './Home.styled';
import { ThemeProvider } from 'styled-components';
import MainPg from 'pages/MainPage/MainPage';
import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
const HomePage = () => {
  const theme = useTheme();
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
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
