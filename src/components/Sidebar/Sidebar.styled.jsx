import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98; // Ensure this is behind the Aside

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const Aside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 285px;
  height: 100%;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.backgroundColor};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  z-index: 99; // Ensure this is above the Backdrop

  ${props =>
    props.$isOpen
      ? 'transform: translateX(0);'
      : 'transform: translateX(-110%);'}

  @media screen and (max-width: 767px) {
    width: 225px;
    padding: 14px 14px 24px;
  }

  @media screen and (min-width: 1440px) {
    transform: translateX(0);
    width: 260px;
    display: block;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  margin-bottom: 60px;
  gap: 8px;
`;

export const IconLogo = styled.svg`
  height: 32px;
  width: 32px;
`;

export const LogoText = styled.h1`
  color: ${props => props.theme.colors.whiteColor};
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.64px;
`;

export const MyBoardsText = styled.p`
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.24px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.5);
`;

export const AddBoardBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${props => props.theme.underlineColor};
  border-bottom: 1px solid ${props => props.theme.underlineColor};
  padding: 14px 0;
`;

export const CreateNewBoard = styled.p`
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  color: white;
  width: 76px;
  cursor: pointer;
`;

export const BtnAdd = styled.button`
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.priorityGreen};
  border: none;
  outline: none;
  padding: 8px 10px;
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    background-color: ${props => props.theme.colors.plusBtnHover};
  }
`;

export const IconPlus = styled.svg`
  height: 20px;
  width: 20px;
  stroke: ${props => props.theme.colors.svgBackColor};
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
`;

export const BtnLogOut = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 14px;
  padding-left: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const IconLogOut = styled.svg`
  height: 32px;
  width: 32px;
  stroke: #bedbb0;
  fill: transparent;
  transition: all 150ms linear;

  &:hover {
    opacity: 0.5;
  }
`;

export const TextLogOut = styled.p`
  font-size: 16px;
  font-family: Poppins;
  font-weight: 500;
  transition: all 150ms linear;
  color: #fff;

  &:hover {
    opacity: 0.5;
  }
`;

export const IconClose = styled.svg`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-45%);
  width: 20px;
  height: 20px;
  fill: transparent;
  transition: all 150ms linear;

  &:hover {
    opacity: 0.5;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;
