import styled from "styled-components";

export const PopupContainer = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupForm = styled.div`
  background: #373b3e;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;
  height: 90%;
  position: relative;
  z-index: 101;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  border: none;
  width: 32px;
  height: 32px;

  i {
    transform: scale(1.5);
  }
`;
