import { styled } from 'styled-components';

export const FormTitle = styled.h3`
  font-size: 12px;
  font-family: 'Poppins';
  font-weight: 400;
  letter-spacing: -0.24px;
  margin-bottom: 4px;
`;
export const InputDesc = styled.input`
  width: calc(100% - 0%);
  height: 154px;
  padding: 14px 18px;
  color: #fff;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  background: #1f1f1f;
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
    color: #fff;
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

export const Label = styled.label`
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 14px;

  cursor: pointer;

  &.active {
    border: ${props =>
      props.value === 'Without priority' && '2px solid rgb(128,128,128)'};
    border: ${props =>
      props.value === 'Low' && '2px solid rgba(143, 161, 208, 1)'};
    border: ${props =>
      props.value === 'Medium' && '2px solid rgba(224, 156, 181, 1)'};
    border: ${props =>
      props.value === 'High' && '2px solid rgba(190, 219, 176, 1)'};
  }
`;
export const LabelItem = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 14px;
  z-index: 99;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${props =>
    props.value === 'Without priority' && 'rgb(128,128,128)'};
  background-color: ${props =>
    props.value === 'Low' && 'rgba(143, 161, 208, 1)'};
  background-color: ${props =>
    props.value === 'Medium' && 'rgba(224, 156, 181, 1)'};
  background-color: ${props =>
    props.value === 'High' && 'rgba(190, 219, 176, 1)'};

  transition: all 250ms linear;

  &.active {
    width: 16px;
    height: 16px;
  }
`;

export const DateTitle = styled.div`
  color: greenyellow;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.28px;

  cursor: pointer;
`;
export const Wrapper = styled.div`
  position: relative;
  width: 233px;

  .react-datepicker {
    overflow: hidden;

    margin-top: -28px;
    border-radius: 8px;
    border: 1px solid green;

    background: greenyellow;
    outline: none;
    width: 233px;
    position: absolute;
    right: -307px;
    top: -190px;

    &__input-container {
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
    }

    &__navigation {
      position: absolute;
      top: 8px;
    }

    &__navigation-icon {
      width: 4px;
      height: 8px;
      color: green;
    }

    &__month {
      margin: 0;
    }

    &__week {
      color: grey;
      font-size: 14px;
      font-family: Poppins;
      line-height: 18px;
      letter-spacing: -0.28px;

      &:last-of-type {
        margin-bottom: 18px;
      }
    }

    &__day {
      width: 24px;
      height: 24px;
      color: blue;
      font-size: 14px;
      font-family: Poppins;
      width: 1.5rem;

      transition: all 250ms ease;

      &--today {
        background: greenyellow;
        color: blue;
        border-radius: 50%;
      }

      &--outside-month {
        width: 24px;
        height: 24px;
        color: gray;
      }

      &--keyboard-selected {
        border-radius: 24px;
        background: greenyellow;
        color: blue;
      }

      &:hover {
        border-radius: 24px;
        background: greenyellow;
        color: blue;
      }
    }

    &__day--disabled {
      width: 24px;
      height: 24px;
      color: gray;
    }

    &__day--selected {
      border-radius: 24px;
      background: greenyellow;
      color: green;
    }

    &__triangle {
      display: none;
    }

    &__header {
      background-color: pink;
      width: 231px;
      border-bottom: none;
      padding: 18px 18px 14px;
    }

    &__day-names {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      border-top: 1px solid gray;
      padding-top: 14px;
    }

    &__day-name {
      color: black;
      font-size: 14px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.28px;
    }

    &__current-month {
      color: black;
      font-size: 16px;
      font-family: Poppins;
      font-weight: 500;
      letter-spacing: -0.32px;
      margin-bottom: 14px;
    }
  }
  .react-datepicker__input-container input {
  }
`;
export const RadioBtnWrapper = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  gap: 24px;
  padding-left: 8px;
`;
export const DefaultRadioBtn = styled.input`
  appearance: none;

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
export const FormWrapper = styled.div`
  position: relative;
`;
