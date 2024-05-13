import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { darkTheme } from '../../assets/theme/theme';
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  /* background: linear-gradient(180deg, #ffffff 25%, #bedbb0 92.19%); */
  background: ${props => props.theme.colors.lightGreenGradient};
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  @media (min-width: 375px) {
    width: 335px;
  }
  @media (min-width: 768px) {
    width: 473px;
  }
`;
export const Img = styled.img`
  width: 124px;
  height: 124px;
  @media (min-width: 768px) {
    width: 162px;
    height: 162px;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  height: 42px;
  margin-top: 14px;
  @media (min-width: 768px) {
    margin-top: 24px;
    height: 60px;
  }
`;
export const ImgLogo = styled.svg`
  width: 40px;
  height: 40px;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;
export const Title = styled.h1`
  color: #161616;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -1.12px;
  @media (min-width: 768px) {
    font-size: 40px;
    letter-spacing: -1.6px;
  }
`;
export const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
  color: #161616;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28em;
  letter-spacing: -0.28px;
`;
export const Btn = styled(NavLink)`
  margin-bottom: 14px;
  text-align: center;
  width: calc(100% - 40px);
  padding: 14px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #161616;
  &:hover {
    color: #fff;
    border-radius: 8px;
    background: #161616;
    transition: opacity 200ms linear;
  }
  @media (min-width: 768px) {
    width: 344px;
  }
`;
