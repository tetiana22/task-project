import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  margin: 24px auto 25px;
  border-radius: 8px;
  width: 68px;
  height: 68px;
  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;
`;
export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  margin-right: 8px;
  object-fit: cover;
`;
export const AvatarImg = styled.img`
  border-radius: 8px;
  width: 68px;
  height: 68px;
`;
export const UserButton = styled.button`
  position: absolute;
  bottom: -20%;
  left: 38%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;

  padding: 0;
  width: 28px;
  height: 28px;
  border: none;
  background-color: ${props => props.theme.colors.inputColor};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
export const Image = styled.img`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  object-fit: cover;
`;
export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.colors.blackColor};
`;
export const HiddenInput = styled.input`
  display: none;
`;
