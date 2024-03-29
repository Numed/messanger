import styled from "styled-components";
import { Field, Form } from "formik";

export const FormInner = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 426px) {
    flex-direction: column-reverse;
    height: 55%;
  }
`;

export const FormTitle = styled.h3`
  width: 70%;
  font-weight: 600;
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;

  @media (max-width: 426px) {
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
`;

export const FormSocial = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & .btn_class {
    width: 90% !important;
  }

  @media (max-width: 788px) {
    width: 45%;
  }

  @media (max-width: 426px) {
    width: 67%;
  }

  @media (max-width: 325px) {
    width: 82%;
  }
`;

export const FacebookButton = styled.button`
  width: 85%;
  background-color: #4267b2;
  border: none;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  border-radius: 5px;
  letter-spacing: 1.1px;
  padding: 8px 20px;
  cursor: pointer;
  transform: scale(1.1);

  &:not(:first-child) {
    margin-top: 25px;
  }

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }

  & svg {
    margin-right: 10px;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding: 5px 15px;
    font-size: 14px;
  }

  @media (max-width: 426px) {
    width: 100%;
    font-size: 12px;
    padding: 6px 15px;
  }
`;

export const GithubButton = styled(FacebookButton)`
  background-color: #171515;
`;

export const Separator = styled.span`
  width: 2px;
  height: 100%;
  background-color: #d9d9d9;
  margin: 0 40px;

  @media (max-width: 426px) {
    transform: rotate(90deg);
    margin: 0;
  }
`;

export const LoginSection = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 426px) {
    width: 80%;
  }

  @media (max-width: 380px) {
    width: 66.6%;
  }
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

export const InputLabel = styled.label`
  margin-bottom: 10px;
  color: #fff;
  @media (max-width: 426px) {
    font-size: 13px;
  }
`;

export const InputError = styled.span`
  font-size: 12px;
  color: #e63946;
  letter-spacing: 1.1px;
`;

export const FormInput = styled(Field)`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  padding: 2px 35px 2px 0;
  color: #fff;
  letter-spacing: -0.05px;
  outline: none;
  border: none;
  background: none;
  border-bottom: 1px solid #d9d9d9;

  &:active,
  &:focus {
    border-bottom: 1px solid #2f8dee;
    transition: all 0.2s linear;
  }
`;

export const BtnLogin = styled.button`
  padding: 4px 30px;
  margin-top: 15px;
  letter-spacing: 1.1px;
  border-radius: 5px;
  background-color: #373b3e;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  border: none;
  margin: 0 auto;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
`;

export const FormikForm = styled(Form)`
  width: 80%;
`;
