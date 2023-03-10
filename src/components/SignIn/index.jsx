import { useRef, useContext } from "react";
import {
  PopupContainer,
  PopupForm,
  BtnClose,
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
import { PopupContext } from "../Context";

const SignInSection = () => {
  const popupRef = useRef(),
    buttonCloseRef = useRef();

  const { setLogined, setOpenPopup } = useContext(PopupContext);

  const onClosePopup = (target) => {
    if (target === popupRef.current || target === buttonCloseRef.current) {
      setOpenPopup(false);
    }
  };

  return (
    <PopupContainer ref={popupRef} onClick={(e) => onClosePopup(e.target)}>
      <PopupForm>
        <BtnClose ref={buttonCloseRef} onClick={(e) => onClosePopup(e.target)}>
          <i className="fas fa-times" />
        </BtnClose>
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
              <FormInput type="text" />
            </InputSection>
            <InputSection>
              <InputLabel>Password</InputLabel>
              <FormInput type="password" />
            </InputSection>
            <BtnLogin>Sign in</BtnLogin>
          </LoginSection>
        </FormInner>
      </PopupForm>
    </PopupContainer>
  );
};

export default SignInSection;
