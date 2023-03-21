import { useState, useContext, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
} from "./style";
import { getFullDate } from "../../helpers/data";
import { notify } from "../../helpers/notifications";
import { CreateInterlocutorMessage, CreateMyMessage } from "../../services";
import { useHttp } from "../../hooks/https.hook";
import Layout from "../LayoutChat";
import ErrorMessage from "../ErrorMessage";

const ChatSide = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const chatSideRef = useRef();

  const { selectedUser, messages, setMessages, setCountMessage } =
    useContext(InfoContext);
  const { name, avatar } = selectedUser;
  const { request } = useHttp();

  let count = 0,
    dateNow,
    dateSide;

  useEffect(() => {
    localStorage.setItem("history-messages", JSON.stringify(messages));
  }, [messages]);

  const handlerSubmit = async () => {
    if (value !== "") {
      const { dateNow, dateSide } = getFullDate();
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

  const onRequest = () => {
    request("https://api.chucknorris.io/jokes/random")
      .then(onGetJoke)
      .catch(onError);
  };

  const onGetJoke = async (info) => {
    setTimeout(() => {
      count += 1;
      setCountMessage((old) => [...old, { name, count: count }]);
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
      notify(info.value, avatar, name, selectedUser);
    }, 10000);
    return count;
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
        <TotalDivMessage key={id}>
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
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {errorMessage}
        <ChatContainerInner>
          <ChatContainer>
            <BtnBack
              className="fas fa-long-arrow-alt-left"
              onClick={switchSection}
            />
            <AvatarName className="chat-avatar__name">{name}</AvatarName>
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
