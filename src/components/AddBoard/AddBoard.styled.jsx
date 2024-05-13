import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const FormTitle = styled.h3`
  color: ${props => props.theme.colors.whiteColor};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;

  margin-bottom: 14px;
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  padding-right: 25px;
  gap: 4px;
`;

export const IconWrapper = styled.label``;

export const Icon = styled.svg`
  cursor: pointer;
  stroke: rgba(255, 255, 255, 0.5);
  fill: transparent;
  transition: all 250ms linear;

  &:hover {
    stroke: ${props => props.theme.colors.whiteColor};
  }

  &.active {
    scale: 1.3;
    transform: rotate(360deg);
    stroke: ${props => props.theme.colors.whiteColor};
  }

  &:focus {
    stroke: ${props => props.theme.colors.whiteColor};
  }
`;

export const DefaultRadioBtn = styled.input`
  appearance: none;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const CustomRadioBtn = styled.div`
  border-radius: 8px;
  width: 28px;
  height: 28px;
  background-image: url(${props => props.$url});
  background-position: center;
  background-size: cover;

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const BgcItem = styled.div`
  border-radius: 8px;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: contain;
  background-color: ${props => props.theme.colors.whiteColor};

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;
