import styled, { keyframes } from 'styled-components';

import { AiOutlineClockCircle } from 'react-icons/ai';

export const blink = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 20px 14px 24px;
  width: 100%;
  min-height: 154px;
  border-radius: 8px;
  background-color: ${props => props.theme.card.bgdcolor};
  overflow: hidden;

  border-left: 8px solid
    ${props =>
      props.$priority === 'Without priority'
        ? 'rgb(128, 128, 128)'
        : props.$priority === 'Low'
        ? 'rgba(143, 161, 208, 1)'
        : props.$priority === 'Medium'
        ? 'rgba(224, 156, 181, 1)'
        : props.$priority === 'High'
        ? 'rgba(190, 219, 176, 1)'
        : 'transparent'};
  transition: background-color 0.3s ease;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  color: ${props => props.theme.card.title};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 600;
  letter-spacing: -0.28px;
  margin: 5px 0;
`;

export const Text = styled.div`
  position: relative;
  display: flex;
  color: #b0b0b0;
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  margin: 0;
  &::after {
    content: '';
    position: absolute;
    bottom: -40px;
    width: 100%;
    height: 1px;
    background-color: #707070;
  }
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 14px;
  position: relative;
`;

export const Priority = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 16px;
  padding-top: 15px;
  gap: 4px;
  color: ${props => props.theme.card.title};
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.2px;
  margin: 0;
  &::after {
    content: 'Priority';
    color: #b0b0b0;
    font-size: 10px;
    font-family: 'Poppins';
    font-weight: 500;
    letter-spacing: -0.16px;
    left: 0px;
    top: 0px;
    position: absolute;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${props =>
      props.$priority === 'Without priority'
        ? 'rgb(128, 128, 128)'
        : props.$priority === 'Low'
        ? 'rgba(143, 161, 208, 1)'
        : props.$priority === 'Medium'
        ? 'rgba(224, 156, 181, 1)'
        : props.$priority === 'High'
        ? 'rgba(190, 219, 176, 1)'
        : 'transparent'};
  }
`;

export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  color: ${props => props.theme.card.title};
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.2px;
  &::before {
    content: 'Deadline';
    color: #b0b0b0;
    font-size: 10px;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: -0.16px;
  }
`;

export const DelayIcon = styled(AiOutlineClockCircle)`
  color: ${props => props.theme.card.icon};
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    stroke: ${props => props.theme.card.iconHover};
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 8px;
`;

export const ActiveIcon = styled.svg`
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.card.icon};
  transition: all 150ms linear;
  cursor: pointer;
  &:hover {
    stroke: ${props => props.theme.card.iconHover};
  }
`;

export const IconBell = styled.svg`
  position: absolute;
  height: 16px;
  width: 16px;
  stroke: ${props => props.theme.card.iconBell};
  fill: transparent;
  transition: all 150ms linear;
  animation: ${blink} 1s infinite;
`;

export const MoverWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const PopupWrapper = styled.ul`
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-70%);
  min-width: 150px;
  min-height: 56px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.modal.border};
  background: ${props => props.theme.modal.backgroundMain};
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.2);
  gap: 4px;
  z-index: 99;
  overflow-y: auto;
  max-height: 112px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #3b82f6;
    border-radius: 12px;
  }
`;

export const PopupItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: ${props => props.theme.sidebar.icon};
  fill: transparent;

  cursor: pointer;
  &:hover {
    color: ${props => props.theme.modal.textAccent};
    svg {
      stroke: ${props => props.theme.modal.textAccent};
      transition: all 250ms linear;
    }
    p {
      color: ${props => props.theme.modal.textAccent};
      transition: all 250ms linear;
    }
  }
`;

export const PopupText = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.28px;
  color: ${props => props.theme.modal.textMain};
`;

export const PopupIcon = styled.svg`
  height: 16px;
  width: 16px;
  stroke: ${props => props.theme.modal.textMain};
  fill: transparent;
`;
export const IconEdit = styled.svg`
  z-index: 99;
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.card.icon};

  margin: 0 8px;
  transition: all 150ms linear;

  &:hover {
    stroke: ${props => props.theme.card.iconHover};
  }
`;
export const IconsBlock = styled.div`
  display: flex;
`;
export const IconDel = styled.svg`
  z-index: 99;
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.card.icon};
  transition: all 150ms linear;

  &:hover {
    stroke: ${props => props.theme.card.iconHover};
  }
`;

export const Div = styled.div`
  padding-right: 15px;
  padding-bottom: 15px;
`;
export const PopTextWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
