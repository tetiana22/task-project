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
      ? props.theme.buttonPlus.bgdBtNotApprove
      : props.theme.buttonPlus.bgdBtApprove};
  border-radius: 8px;

  &:hover {
    transition: opacity 200ms linear;
    background-color: ${props =>
      props.$approve
        ? props.theme.buttonPlus.bgdBtNotApproveHover
        : props.theme.buttonPlus.bgdBtApproveHover};
  }
`;

export const IconWrapper = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${props =>
    props.$approve
      ? props.theme.buttonPlus.plusBgdNotApprove
      : props.theme.buttonPlus.plusBgdApprove};

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    background-color: ${props =>
      props.$approve
        ? props.theme.buttonPlus.plusBgdNotApproveHover
        : props.theme.buttonPlus.plusBgdApprove};
  }
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: ${props =>
    props.$approve
      ? props.theme.buttonPlus.textNotApprove
      : props.theme.buttonPlus.textApprove};
`;
export const Icon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props =>
    props.$approve
      ? props.theme.buttonPlus.iconNotApprove
      : props.theme.buttonPlus.iconApprove};
`;

export const Text = styled.p`
  font-size: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  width: 150px;
`;
