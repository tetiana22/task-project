import styled from 'styled-components';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 14px 20px 14px 24px;
  width: 100%;
  min-height: 154px;
  border-radius: 8px;
  background-color: #1c1c1c;
  overflow: hidden;
  opacity: ${props => (props.expired ? 0.4 : 1)};
  border-left: 8px solid
    ${props =>
      props.priority === 'Without priority'
        ? 'rgb(128, 128, 128)'
        : props.priority === 'Low'
        ? 'rgba(143, 161, 208, 1)'
        : props.priority === 'Medium'
        ? 'rgba(224, 156, 181, 1)'
        : props.priority === 'High'
        ? 'rgba(190, 219, 176, 1)'
        : 'transparent'};
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #2b2b2b;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  color: #e0e0e0;
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
    bottom: -18px;
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
`;

export const Priority = styled.p`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 16px;
  gap: 4px;
  color: #b0b0b0;
  font-size: 10px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.2px;
  margin: 0;
  &::before {
    content: 'Priority';
    color: #b0b0b0;
    font-size: 8px;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: -0.16px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props =>
      props.priority === 'Without priority'
        ? 'rgb(128, 128, 128)'
        : props.priority === 'Low'
        ? 'rgba(143, 161, 208, 1)'
        : props.priority === 'Medium'
        ? 'rgba(224, 156, 181, 1)'
        : props.priority === 'High'
        ? 'rgba(190, 219, 176, 1)'
        : 'transparent'};
  }
`;

export const Deadline = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 4px;
  color: #b0b0b0;
  font-size: 10px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.2px;
  &::before {
    content: 'Deadline';
    color: #b0b0b0;
    font-size: 8px;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: -0.16px;
  }
`;

export const DelayIcon = styled(AiOutlineClockCircle)`
  color: #b0b0b0;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #e0e0e0;
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
  stroke: #b0b0b0;
  transition: all 150ms linear;
  cursor: pointer;
  &:hover {
    stroke: #e0e0e0;
  }
`;

export const IconBell = styled.svg`
  position: absolute;
  height: 16px;
  width: 16px;
  stroke: #90ee90;
  fill: transparent;
  transition: all 150ms linear;
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
  transform: translateX(-50%);
  min-width: 160px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #3b82f6;
  background: #1f2937;
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
  color: #b0b0b0;
  fill: transparent;
  transition: all 250ms linear;
  cursor: pointer;
  &:hover {
    color: #e0e0e0;
  }
`;

export const PopupText = styled.p`
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.28px;
`;

export const PopupIcon = styled.svg`
  height: 16px;
  width: 16px;
`;
