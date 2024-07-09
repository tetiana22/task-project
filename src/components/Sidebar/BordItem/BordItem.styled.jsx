import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  -user-drag: none;
  user-select: none;
`;

export const BoardTitle = styled.h2`
  display: block;
  width: 100%;
  padding: 20px 0;
  color: ${props => props.theme.sidebar.textSecondary};
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;
  transition: all 150ms linear;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 61px;
  transition: all 150ms linear;
  text-decoration: none;
  cursor: pointer;
  flex-grow: 1;
`;

export const Board = styled.div`
  display: flex;

  align-items: center;
  transition: all 150ms linear;
  text-decoration: none;
  width: 100%;
  background-color: transparent;

  &:focus,
  &:hover {
    border-radius: 8px;
    background: ${props => props.theme.sidebar.boardHover};

    ${StyledLink} {
      color: ${props => props.theme.sidebar.textMain};

      svg {
        stroke: ${props => props.theme.sidebar.textMain};
      }

      ${BoardTitle} {
        color: ${props => props.theme.sidebar.textMain};
      }
    }
  }
`;

export const BoardIcon = styled.svg`
  height: 18px;
  width: 18px;
  margin-right: 8px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.textSecondary};
  transition: all 150ms linear;
`;

export const IconsBlock = styled.div`
  display: flex;
`;

export const IconEdit = styled.svg`
  z-index: 99;
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.textSecondary};
  margin: 0 8px;
  transition: all 150ms linear;

  &:hover {
    stroke: ${props => props.theme.sidebar.textMain};
  }
`;

export const IconDel = styled.svg`
  z-index: 99;
  height: 16px;
  width: 16px;
  fill: transparent;
  stroke: ${props => props.theme.sidebar.textSecondary};
  transition: all 150ms linear;

  &:hover {
    stroke: ${props => props.theme.sidebar.textMain};
  }
`;
