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
  background-color: black;
  overflow: hidden;
  opacity: ${props => (props.expired ? 0.4 : 1)};
  &::before {
    content: '';
    width: 14px;
    height: 14px;
    border-radius: 14px;
    z-index: 99;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${props =>
      props.value === 'Without priority'
        ? 'rgb(128,128,128)'
        : props.value === 'Low'
        ? 'rgba(143, 161, 208, 1)'
        : props.value === 'Medium'
        ? 'rgba(224, 156, 181, 1)'
        : props.value === 'High'
        ? 'rgba(190, 219, 176, 1)'
        : 'transparent'};
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h4`
  color: grey;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 600;
  letter-spacing: -0.28px;
  margin: 5px 0;
`;

export const Text = styled.div`
  position: relative;
  display: flex;
  color: grey;
  font-size: 12px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.24px;
  margin: 0px;
  &::after {
    content: '';
    position: absolute;
    bottom: -18px;
    width: 100%;
    height: 1px;
    background-color: grey;
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
  color: grey;
  font-size: 10px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.2px;
  margin: 0px;
  &::before {
    content: 'Priority';
    color: grey;
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
        ? 'rgb(128,128,128)'
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
  color: grey;
  font-size: 10px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.2px;
  &::before {
    content: 'Deadline';
    color: grey;
    font-size: 8px;
    font-family: 'Poppins';
    font-weight: 400;
    letter-spacing: -0.16px;
  }
`;

// Icons
export const DelayIcon = styled(AiOutlineClockCircle)`
  color: grey;
  cursor: pointer;
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
  stroke: blue;
  transition: all 150ms linear;
  cursor: pointer;
  &:hover {
    stroke: grey;
  }
`;

export const IconBellWrapper = styled.div`
  height: 16px;
  width: 16px;
  background-color: grey;
  filter: green;
`;

export const IconBell = styled.svg`
  position: absolute;
  height: 16px;
  width: 16px;
  stroke: green;
  fill: transparent;
  filter: none;
  transition: all 150ms linear;
`;

export const MoverWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
`;

// Popup items
export const PopupWrapper = styled.ul`
  position: absolute;
  bottom: 130%;
  left: 50%;
  transform: translateX(-60%);
  min-width: 160px;
  padding: 18px;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid blue;
  background: green;
  box-shadow: 0px 4px 16px 0px greenyellow;
  gap: 4px;
  z-index: 99;
  overflow-y: scroll;
  scroll-behavior: auto;
  max-height: 112px;
  ::-webkit-scrollbar {
    width: 5px; /* Adjust scrollbar width */
  }
  ::-webkit-scrollbar-thumb {
    background-color: pink;
    border-radius: 12px;
  }
`;

export const PopupItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 100%;
  color: blue;
  stroke: blueviolet;
  fill: transparent;
  transition: all 250ms linear;
  cursor: pointer;
  &:hover {
    /* color: ${props => props.theme.themePopup.textAccent};
    stroke: ${props => props.theme.themePopup.textAccent}; */
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
