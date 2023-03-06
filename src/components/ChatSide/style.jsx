import styled from "styled-components";

export const ChatSideContainer = styled.section`
  width: 66%;
  height: 100%;
  position: relative;
  transition: all 0.25s linear;

  @media (max-width: 660px) {
    display: block;
    width: 100%;
  }

  &.switch {
    @media (max-width: 660px) {
      opacity: 0 !important;
      visibility: hidden !important;
      display: none !important;
    }
  }
`;

export const ChatContainerInner = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const ChatContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  position: relative;
`;

export const ChatInner = styled.div`
  margin-bottom: 10px;
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  @media (max-width: 780px) {
    height: 100%;
    justify-content: flex-start;
    margin-bottom: 10px;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 20px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #27292d;
    border-radius: 8px;
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 350px;
  height: 100%;
  align-items: flex-start;

  @media (max-width: 660px) {
    flex-basis: 300px;
  }

  @media (max-width: 400px) {
    flex-basis: 260px;
  }
`;

export const MyMessageContainer = styled(MessageContainer)`
  align-items: flex-end;
`;

export const InterlocutorContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 10px;

  @media (max-width: 660px) {
    margin-top: 15px;
  }
`;

export const InterlocutorMessage = styled.div`
  display: flex;
  background: #f1f2f7;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0 0 10px;
`;

export const MyMessage = styled(InterlocutorMessage)`
  background: #2d8dfb;
`;

export const MyContainer = styled(InterlocutorContainer)`
  justify-content: flex-end;
`;

export const MessageText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #9196a3;
`;

export const MyMessageText = styled(MessageText)`
  color: #ffffff;
`;

export const Date = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: #222222;
  margin: 5px 0 0 15px;
`;

export const InputSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #ccc;
  padding: 20px 0;

  @media (max-width: 780px) {
    width: 90%;
  }

  @media (max-width: 660px) {
    width: 100%;
  }
`;

export const InputInner = styled.div`
  position: relative;

  @media (max-width: 660px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Input = styled.input`
  width: 430px;
  background: #faf8fc;
  padding: 9px 35px 9px 20px;
  border-radius: 8px;
  font-weight: 400;
  letter-spacing: 1.1px;
  font-size: 12px;
  line-height: 15px;
  color: #888888;
  border: none;

  @media (max-width: 660px) {
    width: 80%;
  }
`;

export const BtnSubmit = styled.button`
  position: absolute;
  top: 0;
  height: 33px;
  left: 92%;
  padding: 9px;
  border-radius: 8px;
  border: none;
  z-index: 3;
  cursor: pointer;
  background: transparent;

  i {
    transform: scale(1.1);
  }

  @media (max-width: 660px) {
    left: 80%;
  }
`;

export const BtnBack = styled.i`
  display: none;
  @media (max-width: 660px) {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #303236;
    transform: scale(1.7);
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 20px;
  }
`;

export const TotalDivMessage = styled.div`
  width: 100%;

  & > .my-container,
  & > .interlocutor-container {
    width: 95%;
  }

  & > .interlocutor-container {
    padding-left: 45px;

    @media (max-width: 660px) {
      padding-left: 15px;
    }
  }
`;
