import styled from 'styled-components';

export const Wrapper = styled.button`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
`;

export const Text = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;

  font-weight: 500;

  letter-spacing: -0.28px;
`;

export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: rgba(255, 255, 255, 0.8);
  transition: all 250ms linear;
  fill: transparent;

  ${props => props.$isOpen && 'transform: rotate(-180deg)'};
`;
