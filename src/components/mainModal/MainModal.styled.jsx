import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: #161616;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(166, 166, 187, 0.25) 0px 2px 5px -1px,
    rgba(255, 255, 255, 0.3) 0px 1px 3px -1px;
`;
