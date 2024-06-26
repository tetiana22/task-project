import styled from 'styled-components';

export const Container = styled.div`
  min-height: 90vh;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
  }
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  flex-shrink: 0;
`;

export const TextBox = styled.div`
  width: 486px;

  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`;

export const Link = styled.button`
  color: ${props => props.theme.colors.lightGreen};
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-left: 3px;
  margin-right: 3px;
`;
