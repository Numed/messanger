import { useRef, useContext } from "react";
import { PopupContainer, PopupForm, BtnClose } from "./styles";
import { PopupContext } from "../Context";

const SignInSection = () => {
  const popupRef = useRef();

  const { setLogined, setOpenPopup } = useContext(PopupContext);

  const onClosePopup = (target) => {
    if (target === popupRef.ref) {
      setOpenPopup(false);
    } else {
      setOpenPopup(false);
    }
  };

  return (
    //TODO: пофіксити баг з закриттям при натискані
    <PopupContainer ref={popupRef} onClick={(e) => onClosePopup(e.target)}>
      <PopupForm>
        <BtnClose onClick={(e) => onClosePopup(e.target)}>
          <i className="fas fa-times"></i>
        </BtnClose>
      </PopupForm>
    </PopupContainer>
  );
};

export default SignInSection;
