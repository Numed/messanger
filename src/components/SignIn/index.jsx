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
  InputError,
  FormInput,
  BtnLogin,
} from "./styles";
import { LoginContext } from "../Context";
import { LoginSocialGithub, LoginSocialFacebook } from "reactjs-social-login";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const SignInSection = () => {
  const { setLogined, setUser, user } = useContext(LoginContext);

  const onReceive = (data) => {
    console.log(data);
    setUser({
      name: data.short_name || data.given_name || data.login,
      image: data.avatar_url || data.picture?.data?.url,
      token: data.access_token || data.accessToken,
    });
    localStorage.setItem("token", data.access_token || data.accessToken);
    if (data.access_token || data.accessToken) {
      setLogined(true);
    } else {
      setLogined(false);
    }
  };

  const checkGithub = (token) => {
    fetch(`https://github.com/login/oauth/access_token=${token}`);
  };

  const checkFacebook = (token) => {
    fetch(
      `https://www.facebook.com/connect/login_success.html#access_token=${token}`
    );
  };

  //TODO: Провалідувати поля через yup
  return (
    <PopupContainer>
      <PopupForm>
        <FormInner>
          <FormSocial>
            <GoogleOAuthProvider clientId="933074360386-tfgqsfrpj6ukjuarh189ji1q9i6pohhl.apps.googleusercontent.com">
              <GoogleButton>
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    console.log(credentialResponse);
                  }}
                  shape="pill"
                  text="continue_with"
                  theme="filled_black"
                  onError={() => {
                    console.log("Login Failed");
                  }}
                >
                  <i className="fab fa-google" />
                  Continue by Google
                </GoogleLogin>
              </GoogleButton>
            </GoogleOAuthProvider>
            <FacebookButton>
              <LoginSocialFacebook
                fieldsProfile={
                  "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                }
                appId={"5995581290562724"}
                onResolve={({ data }) => {
                  onReceive(data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <i className="fab fa-facebook-f" />
                Continue by Facebook
              </LoginSocialFacebook>
            </FacebookButton>
            <GithubButton>
              <LoginSocialGithub
                client_id={"5c66c57740f22128c145"}
                client_secret={"65055e75f157d9245ec6422c398bb5c8a80f80a9"}
                redirect_uri={window.location.href}
                onResolve={({ data }) => {
                  onReceive(data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              >
                <i className="fab fa-github" />
                Continue by Github
              </LoginSocialGithub>
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
