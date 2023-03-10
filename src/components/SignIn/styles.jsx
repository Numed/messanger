import styled from "styled-components";
import bg from "../../img/SignIn/bg.svg";

export const PopupContainer = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupForm = styled.div`
  background-image: url(${bg});
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 70%;
  position: relative;
  z-index: 101;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 32px;
  height: 32px;
  z-index: 102;

  i {
    transform: scale(1.5);
    pointer-events: none;
  }
`;

export const FormInner = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormTitle = styled.h3`
  width: 70%;
  font-weight: 600;
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const FormSocial = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GoogleButton = styled.button`
  width: 80%;
  background-color: #db4437;
  border: none;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 1.1px;
  padding: 6px 20px;
  cursor: pointer;
  transform: scale(1.1);

  &:not(:first-child) {
    margin-top: 20px;
  }

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }

  & i {
    margin-right: 10px;
    pointer-events: none;
  }
`;

export const FacebookButton = styled(GoogleButton)`
  background-color: #4267b2;
`;

export const GithubButton = styled(GoogleButton)`
  background-color: #171515;
`;

export const Separator = styled.span`
  width: 2px;
  height: 100%;
  background-color: #d9d9d9;
  margin: 0 40px;
`;

export const LoginSection = styled.div`
  width: 33.3%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  color: #fff;
`;

export const InputError = styled.span`
  font-size: 12px;
  color: #e63946;
  letter-spacing: 1.1px;
`;

export const FormInput = styled.input`
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  padding: 2px 35px 2px 0;
  color: #373b3e;
  letter-spacing: -0.05px;
  outline: none;
`;

export const BtnLogin = styled.button`
  padding: 4px 30px;
  margin-top: 15px;
  letter-spacing: 1.1px;
  background-color: #373b3e;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
`;
