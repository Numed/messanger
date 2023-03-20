import styled from "styled-components";
import bg from "../../img/SignIn/bg.svg";

export const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;

  @media (max-width: 426px) {
    height: 100vh;
  }
`;

export const PopupForm = styled.div`
  background-image: url(${bg});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 70%;
  position: relative;
  z-index: 101;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 426px) {
    height: 90%;
  }

  @media (max-width: 380px) {
    width: 95%;
  }
`;

export const SignupSwitcher = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SignupLabel = styled.h4`
  color: #fff;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const SignupBtn = styled.button`
  color: #2f8dee;
  background: none;
  font-size: 13px;
  border: none;
  outline: none;
  cursor: pointer;
  letter-spacing: 1.1px;

  &:hover {
    opacity: 0.6;
    transition: opacity 0.2s linear;
  }
`;
