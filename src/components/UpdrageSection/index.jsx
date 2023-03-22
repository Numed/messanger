import { useContext, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { FaTimes } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PopupContext, LoginContext } from "../Context";
import { UpdateScheme } from "../SignForms/validateForms";
import {
  UpdatePopup,
  UpdateContainer,
  BtnClose,
  SectionTitle,
  UpdateInner,
  UpdateLabel,
  UpdateInputContainer,
  BtnSave,
  AvatarContainer,
  ImgContainer,
  UpdateContainerInner,
  UpdateError,
  UpdateInput,
  ImageInner,
} from "./styles";
import { notifySuccses } from "../../helpers/notifications";

const UpdrageSection = () => {
  const { setOpenPopup } = useContext(PopupContext);
  const { user, setUser } = useContext(LoginContext);

  const [nameValue, setName] = useState(user.name);
  const [preview, setPreview] = useState(null);

  const onSubmit = () => {
    if (preview === null && nameValue === user.name) {
      return setOpenPopup(false);
    } else if (preview === null) {
      setUser({
        ...user,
        name: nameValue,
      });
    } else if (nameValue === user.name) {
      setUser({
        ...user,
        image: preview,
      });
    } else {
      setUser({
        ...user,
        name: nameValue,
        image: preview,
      });
    }
    notifySuccses();
    setTimeout(() => {
      setOpenPopup(false);
    }, 2000);
  };

  const onChangeHandler = (value) => {
    setName(value);
  };

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = (preview) => {
    setPreview(preview);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  return (
    <UpdatePopup>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={localStorage.getItem("theme")}
      />
      <UpdateContainer>
        <BtnClose onClick={() => setOpenPopup(false)}>
          <FaTimes />
        </BtnClose>
        <UpdateContainerInner>
          <SectionTitle>Update your profile</SectionTitle>
          <UpdateInner>
            <Formik
              initialValues={{
                name: user.name,
              }}
              validationSchema={UpdateScheme}
              onSubmit={(values) => {
                onSubmit(values);
              }}
            >
              {({ errors }) => (
                <Form>
                  <UpdateInputContainer>
                    <UpdateLabel htmlFor="name">Name</UpdateLabel>
                    <ErrorMessage name="name" />
                    {errors.email ? (
                      <UpdateError>{errors.email}</UpdateError>
                    ) : null}
                    <UpdateInput
                      name="name"
                      onChange={(e) => onChangeHandler(e.target.value)}
                      value={nameValue}
                      required
                    />
                  </UpdateInputContainer>
                  <AvatarContainer>
                    <SectionTitle>Load new photo</SectionTitle>
                    <ImageInner>
                      <ImgContainer
                        width={200}
                        height={200}
                        onCrop={onCrop}
                        onClose={onClose}
                        onBeforeFileLoad={onBeforeFileLoad}
                        src={""}
                      />
                      <img
                        src={preview}
                        alt="Preview"
                        style={{ display: preview !== null ? "block" : "none" }}
                      />
                    </ImageInner>
                    <BtnSave type="submit">Update</BtnSave>
                  </AvatarContainer>
                </Form>
              )}
            </Formik>
          </UpdateInner>
        </UpdateContainerInner>
      </UpdateContainer>
    </UpdatePopup>
  );
};

export default UpdrageSection;
