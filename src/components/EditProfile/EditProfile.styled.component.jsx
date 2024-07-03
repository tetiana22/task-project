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
  bottom: -25%;
  left: 60%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 0;
  width: 28px;
  height: 28px;
  border: none;
  background-color: ${props => props.theme.editProfileModal.buttonBackground};
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
  stroke: ${props => props.theme.editProfileModal.iconPlusColor};
`;

export const HiddenInput = styled.input`
  display: none;
`;

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 20px;

  button {
    display: flex;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  color: ${props => props.theme.editProfileModal.textMain};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: 1px solid ${props => props.theme.editProfileModal.inputBorder};
  opacity: 0.4;
  background: ${props => props.theme.editProfileModal.background};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;
  position: relative;
  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }

  &::placeholder {
    color: #fff;
  }
`;

export const Error = styled.p`
  font-size: 12px;
  line-height: normal;
  color: #fc8181;
  margin-top: 4px;
  position: absolute;
  left: 0;
`;

export const Button = styled.button`
  width: 100%;
  color: ${props => props.theme.editProfileModal.buttonText};
  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: ${props => props.theme.editProfileModal.buttonBackground};
  border-radius: 8px;
  padding: 14px;
  &:hover {
    transition: opacity 200ms linear;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;
