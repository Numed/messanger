import * as Yup from "yup";

export const SigninSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required."),
});

export const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is empty"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required."),
});
