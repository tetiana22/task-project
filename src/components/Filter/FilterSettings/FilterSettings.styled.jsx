import styled from 'styled-components';

export const FormWrapper = styled.div`
  position: relative;
`;
export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const FormTitle = styled.h3`
  color: ${props => props.theme.needHelpModal.textMain};
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-bottom: 14px;
`;

export const DefaultRadioBtn = styled.input`
  appearance: none;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const ShowAllLabel = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-family: Poppins;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  cursor: pointer;

  position: absolute;
  top: 2px;
  right: 0;
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 8px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 8px;

  span {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.24px;
    color: rgba(255, 255, 255, 0.5);
    &.active {
      color: white;
    }
  }
`;

export const LabelItem = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${props =>
    props.value === 'Without priority'
      ? 'rgb(128,128,128)'
      : props.value === 'Low'
      ? 'rgba(143, 161, 208, 1)'
      : props.value === 'Medium'
      ? 'rgba(224, 156, 181, 1)'
      : 'rgba(190, 219, 176, 1)'};
  transition: all 250ms linear;

  &.active {
    width: 16px;
    height: 16px;
  }
`;
