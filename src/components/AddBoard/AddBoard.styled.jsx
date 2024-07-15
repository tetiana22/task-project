import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 24px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const FormTitle = styled.h3`
  color: ${props => props.theme.modal.textMain};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.28px;
  margin-bottom: 14px;
`;

export const RadioBtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  padding-right: 25px;
  gap: 4px;
`;

export const IconWrapper = styled.label``;

export const Icon = styled.svg`
  cursor: pointer;
  stroke: ${props => props.theme.modal.icon};
  fill: transparent;
  transition: all 250ms linear;

  &.active,
  &:hover,
  &:focus {
    scale: 1.3;
    transform: rotate(360deg);
    stroke: ${props => props.theme.modal.iconActive};
  }
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

export const CustomRadioBtn = styled.div`
  border-radius: 8px;
  width: 28px;
  height: 28px;
  background-image: url(${props => props.$url});
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;
export const DefaultImage = styled.img`
  border-radius: 8px;
  border: 1px solid grey;
  outline: none;
  width: 28px;
  height: 28px;
  object-fit: cover;
  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;
export const BgcItem = styled.div`
  border-radius: 8px;
  border: 1px solid grey;
  outline: none;
  width: 28px;
  height: 28px;
  background-position: center;
  background-size: contain;
  background-color: ${props => props.theme.modal.backgroundImg};
  cursor: pointer;
  transition: all 250ms linear;

  &.active {
    scale: 1.1;
  }
`;

export const Img = styled.img`
  border-radius: 6px;
  width: 28px;
  height: 28px;
`;

export const RadioFieldBg = styled.input`
  appearance: none;
  position: absolute;

  &:checked + ${Img} {
    transform: scale(0.95);
    outline: 1px solid var(--color-green);
  }
`;
export const Input = styled.input`
  width: calc(100% - 0%);
  padding: 14px 18px;
  color: ${props => props.theme.modal.inputText};
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: 1px solid ${props => props.theme.modal.addBorder};
  opacity: 0.4;
  background: ${props => props.theme.modal.inputBackround};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  outline: none;
  transition: all 150ms ease;

  &:focus {
    outline: none;
  }
  &:hover {
    opacity: 1;
  }

  &::placeholder {
    color: ${props => props.theme.modal.inputText};
  }

  &::after {
    color: #fc8181;
    border-color: #fc8181;

    &::placeholder {
      color: #fc8181;
    }
  }
  @media screen and (min-width: 375px) {
    width: calc(100% - 0%);
  }
  @media screen and (min-width: 768px) {
    width: calc(100% - 0%);
  }
`;

export const Error = styled.p`
  font-size: 12px;
  line-height: normal;
  color: #fc8181;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
