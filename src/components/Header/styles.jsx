import styled from "styled-components";
import avatar from "../../img/avatar.png";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #d9d9d9;

  @media (max-width: 780px) {
    padding: 20px 0;
  }

  @media (max-width: 400px) {
    padding: 20px 10px;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0;
  @media (max-width: 780px) {
    justify-content: space-evenly;
  }

  @media (max-width: 400px) {
    justify-content: space-between;
  }
`;

export const Logo = styled.div`
  width: 32px;
  height: 32px;
  background-color: #2f8dee;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  border-radius: 20px;
`;

export const InputSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 12px;
    height: 12px;
    margin-right: 10px;
  }
`;

export const Input = styled.input`
  width: 255px;
  border: none;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #222222;

  &:active,
  &:focus {
    border: none;
    outline: none;

    &::-webkit-input-placeholder {
      color: transparent;
    }
  }

  @media (max-width: 660px) {
    width: 130px;
    padding-right: 20px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  &:hover .drop-down__menu {
    display: flex;
  }
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  background: ${(props) =>
    props.bg
      ? `url(${props.bg}) no-repeat center`
      : `url(${avatar}) no-repeat center`};
  background-size: cover;
`;

export const AvatarName = styled.h3`
  font-size: 14px;
  letter-spacing: 1.1px;
  color: #faf8fc;
  float: left;

  span {
    color: #fff;
  }
`;

export const SignInMessage = styled.h3`
  font-size: 14px;
  letter-spacing: 1.1px;
  color: #303236;
`;

export const DropdownContainer = styled.div`
  margin-left: 5px;

  &:hover .drop-down__menu {
    display: flex;
  }
`;

export const DropdownMenu = styled.div`
  display: none;
  top: 100%;
  left: 0;
  position: absolute;
  background-color: #333;
  min-width: 220px;
  z-index: 1;
  height: auto;
  flex-direction: column;
  padding: 10px;
  border-radius: 5px;
`;

export const DropdownLink = styled.div`
  width: 100%;
  height: 100%;

  &:first-child {
    border-bottom: 1px solid #fff;
    padding: 5px;
  }

  &:not(:first-child) {
    margin-top: 15px;
  }
`;

export const SignOut = styled.button`
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  border: none;
  width: 100%;
  height: 24px;
  color: #9196a3;
  font-size: 14px;
  justify-content: flex-start;
  padding-left: 5px;

  &:hover {
    color: #2f8dee;
    transition: all 0.2s ease-in;
  }
`;

export const UpdateButton = styled(SignOut)``;
