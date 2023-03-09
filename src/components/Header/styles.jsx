import styled from "styled-components";
import avatar from "../../img/avatar.jpg";

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

  i {
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

export const CircleActive = styled.span`
  width: 14px;
  height: 14px;
  background: #22cb47;
  position: absolute;
  top: 65%;
  left: 65%;
  border-radius: 8px;
  z-index: 2;

  @media (max-width: 400px) {
    left: 60%;
  }
`;

export const AvatarContainer = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  position: relative;
  background: url(${avatar}) no-repeat center;
  background-size: cover;
`;

export const AvatarName = styled.h3`
  font-size: 14px;
  letter-spacing: 1.1px;
  color: #303236;
  padding: 0 15px;
`;

export const SignInMessage = styled.h3`
  font-size: 14px;
  letter-spacing: 1.1px;
  color: #303236;
`;

export const SignIn = styled.button`
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  border: none;
  width: 100%;

  i {
    padding-left: 10px;
    transform: scale(1.2);
  }
`;

export const SignOut = styled.button`
  cursor: pointer;
  background: none;
  display: flex;
  align-items: center;
  border: none;
  width: 32px;
  height: 32px;

  i {
    transform: scale(1.2);
  }
`;
