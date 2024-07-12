import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  background: ${props => props.theme.needHelp.background};
  button {
    display: flex;
    position: absolute;
    right: 10px;
    top: 60%;
    transform: translateY(-50%);
    border: none;
    cursor: pointer;
    background-color: transparent;
    opacity: 0.4;
  }
`;

export const Input = styled.input`
  width: calc(100% - 0%);
  padding: 14px 18px;
  color: ${props => props.theme.needHelp.textMain};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: 2px solid ${props => props.theme.modal.addBorder};
  opacity: 0.4;
  background: ${props => props.theme.modal.inputBackround};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }

  &::placeholder {
    color: ${props => props.theme.modal.inputText};
  }

  &::after {
    color: #fc8181;
    border-color: #fc8181;

    &::placeholder {
      color: #fc8181;
    }
  }
  @media screen and (min-width: 375px) {
    width: calc(100% - 0%);
  }
  @media screen and (min-width: 768px) {
    width: calc(100% - 0%);
  }
`;

export const Error = styled.p`
  font-size: 12px;
  line-height: normal;
  color: #fc8181;
`;

export const Button = styled.button`
  width: 100%;
  color: ${props => props.theme.modal.buttonText};
  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: ${props => props.theme.modal.buttonBackground};
  border-radius: 8px;
  padding: 14px;
  &:hover {
    transition: opacity 200ms linear;
    background-color: ${props => props.theme.modal.buttonBackgroundHove};
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;
export const TextInput = styled.input`
  padding: 14px 19px 109px 18px;
  color: ${props => props.theme.needHelp.textMain};
  height: 49px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: 1px solid ${props => props.theme.modal.border};
  opacity: 0.4;
  background: ${props => props.theme.modal.inputBackround};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;
  width: calc(100% - 0%);

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }

  &::placeholder {
    color: ${props => props.theme.modal.inputText};
  }

  &::after {
    color: #fc8181;
    border-color: #fc8181;

    &::placeholder {
      color: #fc8181;
    }
  }
`;
