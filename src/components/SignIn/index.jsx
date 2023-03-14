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
import {
  LoginSocialGithub,
  LoginSocialGoogle,
  LoginSocialFacebook,
} from "reactjs-social-login";

const SignInSection = () => {
  const { setLogined, setUser, user } = useContext(LoginContext);

  const onReceive = (data) => {
    setUser({
      name: data.short_name || data.given_name || data.login,
      image: data.avatar_url || data.picture?.data?.url,
      token: data.access_token || data.accessToken,
    });
    localStorage.setItem("token", user.token);
    setLogined(true);
  };

  return (
    <PopupContainer>
      <PopupForm>
        <FormInner>
          <FormSocial>
            <GoogleButton>
              <LoginSocialGoogle
                client_id={
                  "933074360386-tfgqsfrpj6ukjuarh189ji1q9i6pohhl.apps.googleusercontent.com" ||
                  ""
                }
                onResolve={({ data }) => {
                  onReceive(data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              />
              <i className="fab fa-google" />
              Continue by Google
            </GoogleButton>
            <FacebookButton>
              <LoginSocialFacebook
                fieldsProfile={
                  "id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender"
                }
                appId={"5995581290562724" || ""}
                onResolve={({ data }) => {
                  onReceive(data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              />
              <i className="fab fa-facebook-f" />
              Continue by Facebook
            </FacebookButton>
            <GithubButton>
              <LoginSocialGithub
                client_id={"5c66c57740f22128c145"}
                client_secret={"65055e75f157d9245ec6422c398bb5c8a80f80a9"}
                redirect_uri={window.location.href}
                scope={"gist,repo"}
                onResolve={({ data }) => {
                  onReceive(data);
                }}
                onReject={(err) => {
                  console.log(err);
                }}
              />
              <i className="fab fa-github" />
              Continue by Github
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
