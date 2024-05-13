import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
  width: 100%;
  button {
    display: flex;
    position: absolute;
    right: 10px;
    top: 60%;
    transform: translateY(-50%);
    border: none;
    cursor: pointer;
    background-color: transparent;
    opacity: 0.4;
  }
`;

export const Input = styled.input`
  width: calc(100% - 0%);
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

export const Error = styled.p`
  font-size: 12px;
  line-height: normal;
  color: #fc8181;
`;

export const Button = styled.button`
  width: calc(100% + 0%);
  color: #161616;
  text-align: center;
  border: none;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: #bedbb0;
  border-radius: 8px;
  padding: 14px;
  &:hover {
    transition: opacity 200ms linear;
    background-color: #9dc888;
  }
  @media screen and (min-width: 320px) {
  }
  @media screen and (min-width: 375px) {
    width: 100%;
  }
  @media screen and (min-width: 765px) {
    width: 344px;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 20px;
`;
export const TextInput = styled.input`
  padding: 14px 19px 109px 18px;
  color: #fff;
  height: 49px;
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
    width: 285px;
  }
  @media screen and (min-width: 768px) {
    width: 306px;
  }
  @media screen and (min-width: 1440px) {
    width: 306px;
  }
`;
