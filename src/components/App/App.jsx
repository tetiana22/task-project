import Layout from 'components/Layout/Layout';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/Routes/PrivateRoute';
import PublicRoute from 'components/Routes/PublicRoute';

import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { currentUser } from '../../redux/authorization/authReducer';
import { selectIsRefreshing } from '../../redux/selectors';

const Welcome = lazy(() => import('../../pages/Welcome/WelcomePg'));
const HomePage = lazy(() => import('pages/Home/Home'));
const ScreensPage = lazy(() => import('../../pages/ScreenPg/ScreensPage'));
const AuthPage = lazy(() => import('pages/Auth/Auth'));
const LogIn = lazy(() => import('pages/Auth/LogInPg/LogInPg'));
const Registration = lazy(() =>
  import('pages/Auth/RegistrationPg/RegistrationPg')
);

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute redirectTo="/home" component={<Welcome />} />
              }
            />
            <Route
              path="/home"
              element={<PrivateRoute redirectTo="/" component={<HomePage />} />}
            >
              {' '}
              <Route path="/home/:boardId" element={<ScreensPage />} />
            </Route>
            <Route
              path="auth/:id"
              element={<PublicRoute redirectTo="/" component={<AuthPage />} />}
            >
              <Route path="login" element={<LogIn />} />
              <Route path="registration" element={<Registration />} />
            </Route>
          </Route>
        </Routes>
      )}
    </>
  );
};
