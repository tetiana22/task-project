import styled from 'styled-components';

export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.colors.whiteColor};
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const UserButton = styled.button`
  /* bottom: 12.5%;
  left: 120px; */
  left: 50%; /* Центруємо кнопку відносно родительського елемента */
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  position: absolute;
  padding: 0;
  width: 28px;
  height: 28px;
  border: none;
  background-color: ${props => props.theme.colors.blackColor};

  transition: all 150ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Wrap = styled.div`
  position: relative;
`;
