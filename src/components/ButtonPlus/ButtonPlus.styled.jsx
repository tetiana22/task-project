import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 45px;
  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  display: inline-flex;
  padding: 14px 78px 14px 79px;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: ${props =>
    props.$approve
      ? props.theme.colors.inputColor
      : props.theme.colors.blackColor};
  border-radius: 8px;

  &:hover {
    transition: opacity 200ms linear;
    background-color: ${props =>
      props.$approve
        ? props.theme.colors.accentColor
        : props.theme.colors.blackColor};
  }
`;

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.blackColor};
  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => props.theme.colors.whiteColor};
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.blackColor};
  font-size: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  width: 150px;
`;
