import { useState, useContext, useEffect, useRef } from "react";
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
import { getFullDate } from "../../helpers/data";
import { notifyAvatar } from "../../helpers/notifications";
import { CreateInterlocutorMessage, CreateMyMessage } from "../../services";
import { useHttp } from "../../hooks/https.hook";
import Layout from "../LayoutChat";
import ErrorMessage from "../ErrorMessage";

const ChatSide = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const chatSideRef = useRef(),
    totalDiv = useRef();
  let counter = 0;

  const { selectedUser, messages, setMessages, setCountMessage } =
    useContext(InfoContext);
  const { name, avatar } = selectedUser;
  const { request } = useHttp();
  const { dateNow, dateSide } = getFullDate();

  useEffect(() => {
    localStorage.setItem("history-messages", JSON.stringify(messages));
    onScrollToBottom();
  }, [messages]);

  const handlerSubmit = async () => {
    if (value !== "") {
      setMessages([
        ...messages,
        {
          name: name,
          message: value.trim(),
          date: dateSide,
          dateNow: dateNow,
          isBot: false,
        },
      ]);
      setValue("");
      onRequest();
    }
  };

  const onScrollToBottom = () => {
    totalDiv.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onRequest = () => {
    request("https://api.chucknorris.io/jokes/random")
      .then(onGetJoke)
      .catch(onError);
  };

  const onGetJoke = async (info) => {
    setTimeout(() => {
      setCountMessage((old) => [...old, { name, count: ++counter }]);
      setMessages((old) => [
        ...old,
        {
          avatar,
          name,
          date: dateSide,
          message: info.value,
          dateNow: dateNow,
          isBot: true,
        },
      ]);
      notifyAvatar(info.value, avatar, name, selectedUser);
    }, 10000);
    return counter, console.log(counter);
  };

  const onError = () => {
    setError(true);
  };

  const switchSection = () => {
    const sideMenu = document.querySelector(".clicked");
    sideMenu.classList.remove("clicked");
    chatSideRef.current.classList.add("switch");
  };

  const errorMessage = error ? <ErrorMessage /> : null;
  const content =
    !error &&
    messages
      .filter((user) => user.name === name)
      .map(({ avatar, name, message, dateNow, isBot }, id) => (
        <TotalDivMessage key={id} ref={totalDiv}>
          {isBot ? (
            <CreateInterlocutorMessage
              key={id}
              avatar={avatar}
              name={name}
              dateNow={dateNow}
              value={message}
            />
          ) : (
            <CreateMyMessage key={id} message={message} dateNow={dateNow} />
          )}
        </TotalDivMessage>
      ));

  return (
    <>
      <ChatSideContainer ref={chatSideRef} className="chat-side__container">
        {errorMessage}
        <ChatContainerInner>
          <ChatContainer>
            <ChatHeader className="chat-header">
              <BtnBack
                className="fas fa-long-arrow-alt-left"
                onClick={switchSection}
              />
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
                    handlerSubmit(e);
                  }
                }}
                onInput={(e) => setValue(e.target.value)}
                placeholder="Type your message here"
              />
              <BtnSubmit
                className="btn-submit"
                onClick={(e) => handlerSubmit(e)}
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
