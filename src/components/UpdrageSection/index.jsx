import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext, useState } from "react";

import { UpdateScheme } from "../SignForms/validateForms";
import { FaTimes } from "react-icons/fa";
import { PopupContext } from "../Context";
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
} from "./styles";

const UpdrageSection = () => {
  const { setOpenPopup } = useContext(PopupContext);
  const [image, setImage] = useState({
    preview: null,
    imageSrc: "",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const onBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const onCrop = (preview) => {
    setImage({ preview });
  };

  const onClose = () => {
    setImage({ preview: null });
  };

  return (
    <UpdatePopup>
      <UpdateContainer>
        <BtnClose onClick={() => setOpenPopup(false)}>
          <FaTimes />
        </BtnClose>
        <UpdateContainerInner>
          <SectionTitle>Update your profile</SectionTitle>
          <UpdateInner>
            <Formik
              initialValues={{
                name: "",
              }}
              validationSchema={UpdateScheme}
              onSubmit={(values) => {
                onSubmit(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <UpdateInputContainer>
                    <UpdateLabel htmlFor="name">Name</UpdateLabel>
                    <ErrorMessage name="name" />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                    <Field type="text" name="name" required />
                    <BtnSave type="submit">Update</BtnSave>
                  </UpdateInputContainer>
                </Form>
              )}
            </Formik>
            <AvatarContainer>
              <ImgContainer
                width={390}
                height={295}
                onCrop={onCrop}
                onClose={onClose}
                onBeforeFileLoad={onBeforeFileLoad}
                src={image.imageSrc}
              />
              <img src={image.preview} alt="Preview" />
            </AvatarContainer>
          </UpdateInner>
        </UpdateContainerInner>
      </UpdateContainer>
    </UpdatePopup>
  );
};

export default UpdrageSection;
