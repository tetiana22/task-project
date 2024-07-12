import styled from 'styled-components';

export const UserLogoContainer = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
  align-items: center;

  & :nth-child(2) {
    margin-left: 8px;
  }

  & :nth-child(3) {
    margin-left: 4px;
  }

  &:hover > *,
  &:focus-within > * {
  }
`;
export const Div = styled.div`
  display: flex;
`;
export const UserNameText = styled.p`
  font-family: Poppins;
  color: ${props => props.theme.header.text};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  @media (min-width: 768px) {
    width: auto;
    line-height: 1.33;
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  margin-right: 8px;
  object-fit: cover;
`;
export const Ava = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  margin-right: 8px;
  object-fit: cover;
`;

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 18px 20px;
  background-color: ${props => props.theme.header.background};
  color: ${props => props.theme.header.text};
  @media screen and (min-width: 768px) {
    height: 68px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (min-width: 1440px) {
    justify-content: flex-end;
    padding-left: 24px;
    padding-right: 24px;
  }
`;

export const BurgerBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg,
  path {
    stroke: ${props => props.theme.header.menuIcon};
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease-out;
  }

  &:hover {
    svg,
    path {
      transform: scale(1.2);
    }
  }

  @media screen and (min-width: 768px) {
    padding: 15px;
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;
