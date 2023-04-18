import styled from "styled-components";
import { FaMoon } from "react-icons/fa";

export const Container = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > .list-skeleton {
    width: 475px;
    height: 555px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 660px) {
    justify-content: flex-start;
    align-items: center;
  }
`;

export const SideMenuContainer = styled.section`
  width: 33%;
  height: 100%;
  transition: all 0.25s linear;
  @media (max-width: 660px) {
    width: 95%;
  }

  &.clicked {
    @media (max-width: 660px) {
      display: none !important;
      opacity: 0 !important;
      visibility: hidden !important;
    }
  }
`;

export const ChatList = styled.ul`
  width: 100%;
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Chat = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:not(:first-child) {
    margin-top: 20px;

    @media (max-width: 780px) {
      margin-top: 10px;
    }
  }

  &:hover {
    background: #f0ebeb;
    opacity: 0.8;
    transition: all 0.25s ease-in-out;
  }

  &.hide {
    display: none;
  }

  @media (max-width: 1035px) {
    margin-left: 20px;
    width: 100%;
  }

  @media (max-width: 780px) {
    flex-direction: column;
    align-items: flex-start;
  }

  &.clicked {
    display: none;
  }

  &.clicked ~ .chat-side__container {
    display: flex;
  }

  @media (max-width: 660px) {
    width: 100%;
    flex-direction: row;
  }
`;

export const AvatarInner = styled.div`
  display: flex;
  align-items: center;
  pointer-events: none;
  position: relative;

  @media (max-width: 660px) {
    width: 90%;
  }
`;

export const AvatarInfo = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media (max-width: 780px) {
    margin-left: 10px;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const MessageCount = styled.span`
  color: #fff;
  background: #78866b;
  width: 24px;
  height: 24px;
  display: none;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  position: absolute;
  top: 0%;
  right: 95%;

  &.display {
    display: flex;
  }
`;

export const AvatarName = styled.h3`
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: #222222;
  margin-bottom: 3px;
`;

export const AvatarMessage = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: rgb(65, 68, 74);
`;

export const ChatDate = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
  color: #222222;
  pointer-events: none;
  display: flex;
  align-items: baseline;
  justify-content: center;
  height: 35px;
  width: 65px;

  @media (max-width: 780px) {
    justify-content: flex-end;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 660px) {
    width: 30%;
  }
`;

export const Moon = styled(FaMoon)`
  position: absolute;
  bottom: 40px;
  left: 40px;
  transform: scale(1.5);
  cursor: pointer;

  &.active {
    color: #fede00;
    transition: all 0.2s ease-in-out;
  }

  @media (max-width: 780px) {
    bottom: 90.5%;
    left: 95%;
  }

  @media (max-width: 660px) {
    left: 90%;
    display: block;
    top: 5%;
  }

  @media (max-width: 400px) {
    left: 71%;
  }
`;

export const WaitSection = styled.div`
  width: 66%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  position: relative;

  @media (max-width: 660px) {
    display: none;
  }
`;

export const WaitMessage = styled.span`
  position: absolute;
  border-radius: 5px;
  background: #ccc;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 5px 50px;
  color: #fff;
`;
