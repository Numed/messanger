import { useState } from "react";

import {
  PopupContainer,
  PopupForm,
  SignupSwitcher,
  SignupLabel,
  SignupBtn,
} from "./styles";
import SignUp from "../SignUp";
import SignIn from "../SignIn";

const SignInSection = () => {
  const [openSwitch, setOpenSwitch] = useState(false);
  return (
    <PopupContainer>
      <PopupForm>
        {openSwitch ? <SignUp /> : <SignIn />}
        <SignupSwitcher>
          <SignupLabel>
            {openSwitch ? "Already have an account?" : "Don't have an account?"}
          </SignupLabel>
          <SignupBtn onClick={() => setOpenSwitch(!openSwitch)}>
            {openSwitch ? "Go to sign in" : "Create an account"}
          </SignupBtn>
        </SignupSwitcher>
      </PopupForm>
    </PopupContainer>
  );
};

export default SignInSection;
