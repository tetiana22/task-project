import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from '../../redux/authorization/authReducer';
import { selectIsRefreshing } from '../../redux/selectors';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '../../assets/theme/theme';

const WelcomePage = lazy(() => import('pages/WelcomePg/WelcomePage'));
const HomePage = lazy(() => import('pages/Home/Home'));
const ScreensPage = lazy(() =>
  import('../../pages/Home/ScreensPage/ScreensPage')
);
const AuthPage = lazy(() => import('components/Auth/Auth'));
const LogIn = lazy(() => import('components/Auth/LogInPg/LogInPg'));
const Registration = lazy(() =>
  import('components/Auth/RegistrationPg/RegistrationPg')
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <>
      {' '}
      <ThemeProvider theme={darkTheme}>
        {isRefreshing ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PublicRoute redirectTo="/home" component={<WelcomePage />} />
                }
              />
              <Route
                path="/home"
                element={
                  <PrivateRoute redirectTo="/" component={<HomePage />} />
                }
              >
                {' '}
                <Route path=":boardName" element={<ScreensPage />} />
              </Route>
              <Route
                path="auth/:id"
                element={
                  <PublicRoute redirectTo="/" component={<AuthPage />} />
                }
              >
                <Route path="login" element={<LogIn />} />
                <Route path="registration" element={<Registration />} />
              </Route>
            </Route>
          </Routes>
        )}
      </ThemeProvider>
    </>
  );
};
