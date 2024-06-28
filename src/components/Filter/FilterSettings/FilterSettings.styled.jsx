import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

export const SectionTitle = styled.h2`
  color: grey;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.36px;
  margin-bottom: 14px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  margin-bottom: 24px;

  &:first-of-type {
    padding-top: 14px;
    padding-bottom: 14px;
    border-top: 1px solid red;
    border-bottom: 1px solid red;
  }

  &:last-of-type {
    position: relative;
    margin-bottom: 0;
  }
`;

export const FormTitle = styled.h3`
  color: wheat;
  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-bottom: 14px;
`;

export const BgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 252px;
  gap: 4px;
`;

export const BgItem = styled.div`
  border-radius: 8px;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;
  background-color: orange;
  background-position: center;
  background-size: contain;

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const CustomRadioBtn = styled.div`
  border-radius: 8px;
  width: 28px;
  height: 28px;

  background-image: url(${props => props.url});
  background-position: center;
  background-size: cover;

  cursor: pointer;
  background-color: yellow;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const DefaultRadioBtn = styled.div`
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
  color: blueviolet;
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
  justify-content: center;
  align-items: stretch;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 16px;
  height: 14px;
  border-radius: 14px;

  cursor: pointer;

  &.active {
    ${props =>
      props.$priority === 'Without priority'
        ? 'rgb(128, 128, 128)'
        : props.$priority === 'Low'
        ? 'rgba(143, 161, 208, 1)'
        : props.$priority === 'Medium'
        ? 'rgba(224, 156, 181, 1)'
        : props.$priority === 'High'
        ? 'rgba(190, 219, 176, 1)'
        : 'transparent'};
  }
`;

export const LabelItem = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${props =>
    props.$priority === 'Without priority'
      ? 'rgb(128, 128, 128)'
      : props.$priority === 'Low'
      ? 'rgba(143, 161, 208, 1)'
      : props.$priority === 'Medium'
      ? 'rgba(224, 156, 181, 1)'
      : props.$priority === 'High'
      ? 'rgba(190, 219, 176, 1)'
      : 'transparent'};

  transition: all 250ms linear;

  &.active {
    width: 6px;
    height: 6px;
  }
`;

export const LabelText = styled.p`
  display: block;
  width: 100%;
  color: blue;
  font-size: 12px;
  font-family: Poppins;
  letter-spacing: -0.24px;

  &.active {
    color: blueviolet;
  }

  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BgcItem = styled.div`
  border-radius: 8px;
  border: none;
  outline: none;
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: contain;
  background-color: white;

  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;
