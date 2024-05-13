import styled from 'styled-components';

export const CloseModalCrossStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  float: inline-end;
`;

export const Div = styled.div`
  width: 100vw; /* Full width of the viewport */
  height: 100vh; /* Full height of the viewport */
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  /* z-index: 1000;  */
  position: absolute;
`;

export const ModalContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.priorityGreen};
  width: 335px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  position: absolute;
  background-color: black;
  padding: 24px;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.h2`
  color: ${props => props.theme.colors.whiteColor};
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;
