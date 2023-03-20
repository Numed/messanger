import styled from "styled-components";

import { LoginSection, FormInner, FormTitle } from "../SignIn/styles";

export const SignupFormInner = styled(FormInner)`
  height: 55%;
`;

export const InputSectionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & > div:last-child {
    margin-left: 40px;
  }
`;

export const SignUpTitle = styled(FormTitle)`
  margin-bottom: 20px;
  text-align: center;
`;

export const SignUpSection = styled(LoginSection)`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 426px) {
    width: 85%;
  }
`;
