import { useContext } from "react";
import {
  PopupContainer,
  PopupForm,
  FormInner,
  FormTitle,
  FormSocial,
  GoogleButton,
  FacebookButton,
  GithubButton,
  Separator,
  LoginSection,
  InputSection,
  InputLabel,
  FormInput,
  BtnLogin,
} from "./styles";
import { LoginContext } from "../Context";

const SignInSection = () => {

  const { setLogined } = useContext(LoginContext);

  return (
    <PopupContainer>
      <PopupForm>
        <FormInner>
          <FormSocial>
            <GoogleButton>
              <i className="fab fa-google" />
              Sign in by Google
            </GoogleButton>
            <FacebookButton>
              <i className="fab fa-facebook-f" />
              Sign in by Facebook
            </FacebookButton>
            <GithubButton>
              <i className="fab fa-github" />
              Sign in by GitHub
            </GithubButton>
          </FormSocial>
          <Separator />
          <LoginSection>
            <FormTitle>Sign in by email</FormTitle>
            <InputSection>
              <InputLabel>Email</InputLabel>
              <FormInput type="text" required />
            </InputSection>
            <InputSection>
              <InputLabel>Password</InputLabel>
              <FormInput type="password" required />
            </InputSection>
            <BtnLogin>Sign in</BtnLogin>
          </LoginSection>
        </FormInner>
      </PopupForm>
    </PopupContainer>
  );
};

export default SignInSection;
