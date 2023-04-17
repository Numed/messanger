import { useContext, useEffect, useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";

import { AvatarName } from "../SideMenu/style";
import { InfoContext } from "../Context";
import {
  ChatContainer,
  ChatContainerInner,
  ChatInner,
  Input,
  InputSection,
  BtnSubmit,
  ChatSideContainer,
  TotalDivMessage,
  BtnBack,
  InputInner,
  ChatHeader,
} from "./style";
import {
  CreateInterlocutorMessage,
  CreateMyMessage,
} from "../../helpers/messages";
import Layout from "../LayoutChat";
import ErrorMessage from "../ErrorMessage";
import useChatSide from "./useChatSide";

const ChatSide = () => {
  const chatSideRef = useRef(),
    totalDiv = useRef();
  const { handlerSubmit, value, setValue, error, socketSubmit } = useChatSide();

  const { selectedUser, messages } = useContext(InfoContext);
  const { name } = selectedUser;

  useEffect(() => {
    onScrollToBottom();
  }, [messages]);

  const onScrollToBottom = () => {
    totalDiv.current?.scrollIntoView({ behavior: "smooth" });
  };

  const switchSection = () => {
    const sideMenu = document.querySelector(".clicked");
    sideMenu.classList.remove("clicked");
    chatSideRef.current.classList.add("switch");
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const content =
    !error && messages.length > 6
      ? messages
          .filter((user) => user.name === name)
          .map(({ avatar, name, message, dateNow, isBot }, id) => (
            <TotalDivMessage key={id} ref={totalDiv}>
              {isBot !== undefined ? (
                isBot ? (
                  <CreateInterlocutorMessage
                    key={id}
                    avatar={avatar}
                    name={name}
                    dateNow={dateNow}
                    value={message}
                  />
                ) : (
                  <CreateMyMessage
                    key={id}
                    message={message}
                    dateNow={dateNow}
                  />
                )
              ) : null}
            </TotalDivMessage>
          ))
      : null;

  return (
    <>
      <ChatSideContainer ref={chatSideRef} className="chat-side__container">
        {errorMessage}
        <ChatContainerInner>
          <ChatContainer>
            <ChatHeader className="chat-header">
              <BtnBack className="btn-back" onClick={switchSection} />
              <AvatarName className="chat-avatar__name">{name}</AvatarName>
            </ChatHeader>
            <ChatInner className="chat-inner">
              <Layout />
              {content}
            </ChatInner>
          </ChatContainer>
          <InputSection>
            <InputInner>
              <Input
                className="input-message"
                type="text"
                value={value}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    name === "Group chat" && value !== ""
                      ? socketSubmit(e)
                      : handlerSubmit(e);
                  }
                }}
                onInput={(e) => setValue(e.target.value)}
                placeholder="Type your message here"
              />
              <BtnSubmit
                className="btn-submit"
                onClick={(e) =>
                  name === "Group Chat" && value !== ""
                    ? socketSubmit(e)
                    : handlerSubmit(e)
                }
              >
                <FaPaperPlane />
              </BtnSubmit>
            </InputInner>
          </InputSection>
        </ChatContainerInner>
      </ChatSideContainer>
    </>
  );
};

export default ChatSide;
