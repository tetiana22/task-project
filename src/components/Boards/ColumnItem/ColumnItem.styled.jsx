import styled from 'styled-components';

export const Wrap = styled.div`
  width: 335px;
  height: 100%;
`;
export const Title = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${props => props.theme.card.title};
`;
export const Column = styled.div`
  width: 100%;
  height: 45px;
  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  padding: 14px 78px 14px 79px;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.modal.backgroundMain};
  border-radius: 8px;
`;
