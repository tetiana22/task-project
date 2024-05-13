import welcomemob1x from '../../assets/fonts/images/welcome/welcome-mob-1x.png';
import welcomemob2x from '../../assets/fonts/images/welcome/welcome-mob-2x.png';
import welcomemtab1x from '../../assets/fonts/images/welcome/welcome-tab-1x.png';
import welcomemtab2x from '../../assets/fonts/images/welcome/welcome-tab-2x.png';
import welcomemdes1x from '../../assets/fonts/images/welcome/welcome-desk-1x.png';
import welcomemdes2x from '../../assets/fonts/images/welcome/welcome-desk-2x.png';
import sprite from '../../assets/fonts/images/icons/icons-sprite.svg';
import {
  Wrapper,
  Container,
  ImgLogo,
  Title,
  Text,
  Btn,
  Logo,
} from './WelcomePg.styled';
const Welcome = () => {
  return (
    <Wrapper>
      <Container>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${welcomemdes1x} 1x, ${welcomemdes2x} 2x`}
            type="image/png"
          />
          <source
            media="(min-width: 767px)"
            srcSet={`${welcomemtab1x} 1x, ${welcomemtab2x} 2x`}
            type="image/png"
          />
          <source
            media="(max-width: 767px)"
            srcSet={`${welcomemob1x} 1x, ${welcomemob2x} 2x`}
            type="image/png"
          />
          <img src={welcomemdes1x} alt="logo" />
        </picture>
        <Logo>
          <ImgLogo>
            {' '}
            <use href={sprite + '#icon-logo'} />
          </ImgLogo>
          <Title>Task Pro</Title>
        </Logo>
        <Text>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </Text>
        <Btn to="/auth/register">Registration</Btn>
        <Btn to="/auth/login">Log In</Btn>
      </Container>
    </Wrapper>
  );
};
export default Welcome;
