import styled from 'styled-components';

export const HomePageContainer = styled.div`
  height: 100vh;
  overflow-x: auto;
  overflow-y: hidden;
  margin: 0 auto;
  display: flex;
  @media (min-width: 1440px) {
    max-width: 144rem;
    display: flex;

    justify-content: center;
  }
`;

export const MainContainer = styled.div`
  width: 100%;
  @media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
  }
`;
