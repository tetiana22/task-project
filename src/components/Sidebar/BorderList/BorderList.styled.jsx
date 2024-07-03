import styled from 'styled-components';

export const List = styled.ul`
  max-height: 250px;
  padding: 0;
  margin-bottom: 40px;
  overflow-y: scroll;
  scroll-behavior: auto;

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


  ::-webkit-scrollbar {
    width: 0;
  }
`;
