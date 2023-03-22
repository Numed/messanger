import styled from "styled-components";
import Avatar from "react-avatar-edit";
import { Field } from "formik";

export const UpdatePopup = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const UpdateContainer = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  height: 80%;
  background: #333;
`;

export const BtnClose = styled.button`
  width: 32px;
  height: 32px;
  color: #fff;
  background: none;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  outline: none;
  border: none;

  svg {
    transform: scale(1.2);
  }
`;

export const UpdateContainerInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const UpdateInner = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  letter-spacing: 1.1px;
`;

export const UpdateInputContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

export const UpdateLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 10px;
  color: #fff;

  @media (max-width: 426px) {
    font-size: 13px;
  }
`;

export const UpdateError = styled.span`
  font-size: 12px;
  color: #e63946;
  letter-spacing: 1.1px;
`;

export const BtnSave = styled.button`
  padding: 4px 30px;
  margin-top: 15px;
  letter-spacing: 1.1px;
  border-radius: 5px;
  background-color: #373b3e;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  border: none;

  &:hover {
    opacity: 0.8;
    transition: all 0.2s ease-in-out;
  }
`;

export const UpdateInput = styled(Field)`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  padding: 2px 35px 2px 0;
  color: #fff;
  letter-spacing: -0.05px;
  outline: none;
  border: none;
  background: none;
  border-bottom: 1px solid #d9d9d9;

  &:active,
  &:focus {
    border-bottom: 1px solid #2f8dee;
    transition: all 0.2s linear;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    margin-left: 25px;
  }
`;

export const ImageInner = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgContainer = styled(Avatar)``;
