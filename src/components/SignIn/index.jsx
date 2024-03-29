import { useContext } from "react";
import { LoginSocialGithub, LoginSocialFacebook } from "reactjs-social-login";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { Formik } from "formik";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

import {
  FormSocial,
  FacebookButton,
  GithubButton,
  Separator,
  LoginSection,
  FormTitle,
  InputSection,
  InputLabel,
  InputError,
  FormInput,
  BtnLogin,
  FormInner,
  FormikForm,
} from "./styles";
import { SigninSchema } from "../SignForms/validateForms";
import { useSignIn } from "./useSignIn";
import { LoginContext } from "../Context";
import useRequestService from "../../services/index";
import { notifyError } from "../../helpers/notifications";

const SignIn = () => {
  const { loading, onReceive } = useSignIn();
  const { setLogined, setUser } = useContext(LoginContext);
  const { loginUser } = useRequestService();

  const onError = (err) => {
    notifyError(err);
  };

  const onSubmit = (values) => {
    loginUser(values).then(onRequest).catch(onError);
  };

  const onRequest = (data) => {
    setUser({
      name: data.name,
      email: data.email,
      image: data.image,
      token: data.token,
      messages: data.messages,
    });
    localStorage.setItem("token", data.token);
    localStorage.setItem("logined", true);
    setLogined(true);
  };

  return (
    <>
      <FormInner>
        <FormSocial>
          <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_ID}>
            <GoogleLogin
              className="btn_class"
              onSuccess={(data) => {
                onReceive(data);
              }}
              onError={onError}
              width={280}
              logo_alignment="left"
              text="continue_with"
              theme="filled_black"
              shape="rectangular"
              disabled={loading}
              cancel_on_tap_outsides
            >
              <FaGoogle className="fab fa-google" />
              Continue by Google
            </GoogleLogin>
          </GoogleOAuthProvider>
          <FacebookButton disabled={loading}>
            <LoginSocialFacebook
              appId={process.env.REACT_APP_FACEBOOK_ID}
              fieldsProfile="picture,short_name, email"
              onResolve={({ data }) => {
                onReceive(data);
              }}
              onReject={onError}
            >
              <FaFacebook className="fab fa-facebook-f" />
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
              <FaGithub className="fab fa-github" />
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
            validationSchema={SigninSchema}
            onSubmit={(values) => {
              onSubmit(values);
            }}
          >
            {({ errors, touched }) => (
              <FormikForm>
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
              </FormikForm>
            )}
          </Formik>
        </LoginSection>
      </FormInner>
    </>
  );
};

export default SignIn;
