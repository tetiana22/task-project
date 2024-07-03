import styled from 'styled-components';

export const Container = styled.div`
  min-height: 90vh;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.container.background};
  padding: 20px;
  color: ${props => props.theme.sidebar.textMain};
  @media screen and (min-width: 768px) {
    padding: 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 24px;
  }
`;

export const TextBox = styled.div`
  width: 486px;

  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.28px;
`;

export const Link = styled.span`
  color: ${props => props.theme.modal.textAccent};
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
