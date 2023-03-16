import { useContext, useState } from "react";
import { LoginSocialGithub, LoginSocialFacebook } from "reactjs-social-login";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { Formik, Form } from "formik";

import {
  PopupContainer,
  PopupForm,
  FormInner,
  FormTitle,
  FormSocial,
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
import { SignupSchema } from "./validateForm";

const SignInSection = () => {
  const [loading, setLoading] = useState(false);
  const { setLogined, setUser } = useContext(LoginContext);

  const onReceive = (data) => {
    setLoading(false);
    if (data.credential) {
      const userDate = jwt_decode(data.credential);
      setUser({
        name: userDate.given_name,
        image: userDate.picture,
        token: userDate.access_token,
      });
      localStorage.setItem("token", data.credential);
      data.credential !== undefined ? setLogined(true) : setLogined(false);
    } else {
      setUser({
        name: data.short_name || data.login,
        image: data.avatar_url || data.picture.data.url,
        token: data.access_token || data.accessToken,
      });
      localStorage.setItem("token", data.access_token || data.accessToken);
      data.access_token || data.accessToken
        ? setLogined(true)
        : setLogined(false);
    }
  };

  const onError = (err) => {
    console.log(err);
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <PopupContainer>
      <PopupForm>
        <FormInner>
          <FormSocial>
            <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
              <GoogleLogin
                onSuccess={(data) => {
                  onReceive(data);
                }}
                onError={onError}
                style={{ width: "90%" }}
                logo_alignment="left"
                text="continue_with"
                theme="filled_black"
                shape="rectangular"
                disabled={loading}
                cancel_on_tap_outside
              >
                <i className="fab fa-google" />
                Continue by Google
              </GoogleLogin>
            </GoogleOAuthProvider>
            <FacebookButton disabled={loading}>
              <LoginSocialFacebook
                appId={process.env.REACT_APP_FACEBOOK_ID}
                fieldsProfile="picture,short_name,"
                onResolve={({ data }) => {
                  onReceive(data);
                }}
                onReject={onError}
              >
                <i className="fab fa-facebook-f" />
                Continue by Facebook
              </LoginSocialFacebook>
            </FacebookButton>
            <GithubButton disabled={loading}>
              <LoginSocialGithub
                client_id={process.env.REACT_APP_GITHUB_ID}
                client_secret={process.env.REACT_APP_GITHUB_SECRET}
                redirect_uri={window.location.href}
                onResolve={({ data }) => {
                  onReceive(data);
                }}
                onReject={onError}
              >
                <i className="fab fa-github" />
                Continue by Github
              </LoginSocialGithub>
            </GithubButton>
          </FormSocial>
          <Separator />
          <LoginSection>
            <FormTitle>Sign in by email</FormTitle>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                onSubmit(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <InputSection>
                    <InputLabel>Email</InputLabel>
                    {errors.email && touched.email ? (
                      <InputError>{errors.email}</InputError>
                    ) : null}
                    <FormInput type="email" name="email" required />
                  </InputSection>
                  <InputSection>
                    <InputLabel>Password</InputLabel>
                    {errors.password && touched.password ? (
                      <InputError>{errors.password}</InputError>
                    ) : null}
                    <FormInput type="password" name="password" required />
                  </InputSection>
                  <BtnLogin type="submit">Sign in</BtnLogin>
                </Form>
              )}
            </Formik>
          </LoginSection>
        </FormInner>
      </PopupForm>
    </PopupContainer>
  );
};

export default SignInSection;
