import styled from 'styled-components';

export const List = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 335px;
  gap: 8px;
  max-height: calc(154px * 6 + 8px);
  overflow-y: scroll;
  scroll-behavior: auto;
  padding-left: 0px;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: #8d1e1e;
    border: 5px solid greenyellow;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: lightgrey;
  }

  @media screen and (min-height: 780px) {
    max-height: calc(154px * 3 + 16px);
    width: ${props => (props.$length < 4 ? '342px' : '350px')};
  }

  @media screen and (min-height: 942px) {
    max-height: calc(154px * 4 + 24px);
    width: ${props => (props.$length < 5 ? '342px' : '350px')};
  }

  @media screen and (min-height: 1104px) {
    max-height: calc(154px * 5 + 32px);
    width: ${props => (props.$length < 6 ? '342px' : '350px')};
  }
`;
