import styled from 'styled-components';

export const List = styled.ul`
  /* position: relative;
  left: 50%;
  top: -100%;
  transform: translate(-50%, calc(100% + 40px)); */
  max-height: 126px;
  padding: 0;
  margin-bottom: 40px;
  overflow-y: scroll;
  scroll-behavior: auto;

  height: 126px;
  ::-webkit-scrollbar {
    width: 5px;
    opacity: 0.4;
    background-color: #1f1f1f;
    border-radius: 12px;
  }
  ::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: pink;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 260px;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
`;
