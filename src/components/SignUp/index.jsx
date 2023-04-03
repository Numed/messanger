import { useContext } from "react";
import { Formik, Form } from "formik";

import { SignupSchema } from "../SignForms/validateForms";
import {
  InputSection,
  InputLabel,
  InputError,
  FormInput,
  BtnLogin,
} from "../SignIn/styles";
import {
  SignUpSection,
  SignupFormInner,
  InputSectionWrapper,
  SignUpTitle,
} from "./styles";
import { LoginContext } from "../Context";
import useRequestService from "../../services/index";
import { notifyError } from "../../helpers/notifications";

const SignUp = () => {
  const { setLogined, setUser } = useContext(LoginContext);
  const { registerUser } = useRequestService();

  const onSubmit = (data) => {
    registerUser(data).then(onRequest).catch(onError);
  };

  const onRequest = (data) => {
    setUser({
      name: data.name,
      email: data.email,
      token: data.token,
    });
    localStorage.setItem("token", data.token);
    setLogined(true);
    localStorage.setItem("logined", true);
  };

  const onError = (error) => {
    console.log(error);
    notifyError(error);
  };

  return (
    <SignupFormInner>
      <SignUpSection>
        <SignUpTitle>Sign up</SignUpTitle>
        <Formik
          initialValues={{
            name: "",
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
              <InputSectionWrapper>
                <InputSection>
                  <InputLabel>Name</InputLabel>
                  {errors.name && touched.name ? (
                    <InputError>{errors.name}</InputError>
                  ) : null}
                  <FormInput type="text" name="name" required />
                </InputSection>
                <InputSection>
                  <InputLabel>Email</InputLabel>
                  {errors.email && touched.email ? (
                    <InputError>{errors.email}</InputError>
                  ) : null}
                  <FormInput type="email" name="email" required />
                </InputSection>
              </InputSectionWrapper>
              <InputSection>
                <InputLabel>Password</InputLabel>
                {errors.password && touched.password ? (
                  <InputError>{errors.password}</InputError>
                ) : null}
                <FormInput type="password" name="password" required />
              </InputSection>
              <BtnLogin type="submit">Sign up</BtnLogin>
            </Form>
          )}
        </Formik>
      </SignUpSection>
    </SignupFormInner>
  );
};

export default SignUp;
