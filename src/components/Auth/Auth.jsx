import { Outlet, useParams } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Modal,
  ModalNav,
  ModalNavItem,
  WelcomeWrapper,
  Wrap,
} from './Auth.styled';
import LogIn from 'components/Auth/LogInPg/LogInPg';
import Registration from 'components/Auth/RegistrationPg/RegistrationPg';

function AuthPage() {
  const { id } = useParams();

  return (
    <Wrap>
      <WelcomeWrapper>
        <Modal>
          <ModalNav>
            <ModalNavItem to="/auth/register">Registration</ModalNavItem>
            <ModalNavItem to="/auth/login">Log In</ModalNavItem>
          </ModalNav>

          {id === 'login' && <LogIn />}
          {id === 'register' && <Registration />}

          <Suspense>
            <Outlet />
          </Suspense>
        </Modal>
      </WelcomeWrapper>
    </Wrap>
  );
}

export default AuthPage;
