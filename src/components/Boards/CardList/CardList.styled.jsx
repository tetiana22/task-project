import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 350px;
  gap: 8px;
  max-height: calc(154px * 2 + 8px);
  padding-right: 8px;
  overflow-y: scroll;
  scroll-behavior: auto;
  width: 225px;
  height: 126px;
  ::-webkit-scrollbar {
    width: 200px;
    opacity: 0.4;
    background-color: #1f1f1f;
    border-radius: 12px;
  }
  ::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: pink;
    border-radius: 12px;
  }
`;
