import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  margin: 0 auto;
  padding: 8px 20px 0;
  width: 320px;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 16px 32px 0;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 12px 112px 0;
  }
`;
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

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

export const DefaultNeme = styled.p`
  text-transform: uppercase;
`;

export const UserNameText = styled.p`
  color: #fff;
  @media (min-width: 768px) {
    width: auto;
    line-height: 1.33;
  }
`;

export const UserAvatar = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  object-fit: cover;
`;

export const BurgerIcon = styled.svg`
  display: flex;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;

  cursor: pointer;
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: transparent;
  color: inherit;
`;

export const UserIcon = styled.svg`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: transparent;
  color: inherit;
`;
export const Avatar = styled.img`
  width: 80px;
  height: 80px;
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
export const BurgerButton = styled.button`
  @media (min-width: 1440px) {
    display: {
      xs: block;
      sm: none;
    }
  }
  min-width: 0;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: end;
`;

export const UserText = styled.h3`
  margin-right: 8px;
  width: auto;
  /* color: 'text.primary'; */
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: 0.7;
  font-weight: 500;
`;

export const UserButton = styled.button`
  min-width: 0;
  padding: 0;
  border: 0;
  &:hover {
    background-color: inherit;
    border: 0;
    transform: scale(1.1);
  }
`;

export const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 18px 20px;
  background-color: #161616;
  color: #fff;
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

  svg,
  path {
    stroke: #fff;

    @media screen and (min-width: 768px) {
      width: 32px;
      height: 32px;
    }
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const HeaderUserWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media screen and (min-width: 768px) {
    gap: 14px;
  }
  @media screen and (min-width: 1440px) {
    gap: 25px;
  }
`;
