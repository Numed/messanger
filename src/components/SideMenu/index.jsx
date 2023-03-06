import { useEffect, useState, useRef } from "react";
import {
  Container,
  Chat,
  ChatDate,
  ChatList,
  Moon,
  Avatar,
  AvatarInfo,
  AvatarInner,
  AvatarMessage,
  AvatarName,
  SideMenuContainer,
  WaitSection,
  WaitMessage,
  MessageCount,
} from "./style";
import ChatSide from "../ChatSide";
import InfoContext from "../Context";
import ErrorBoundary from "../ErrorBoundary";
import { contacts } from "../Constants";
import { sortChats, displayCounter, onDarkMode } from "../../helpers";

const SideMenu = () => {
  const [info, setInfo] = useState(
    localStorage.getItem("history-chat-list")
      ? JSON.parse(localStorage.getItem("history-chat-list"))
      : contacts
  );
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(
    localStorage.getItem("history-messages")
      ? JSON.parse(localStorage.getItem("history-messages"))
      : []
  );
  const [countMessage, setCountMessage] = useState([]);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode"));

  const sideMenuRef = useRef(),
    moonRef = useRef();

  useEffect(() => {
    onDarkMode(moonRef, darkMode);
    // eslint-disable-next-line
  }, [darkMode]);

  useEffect(() => {
    setInfo(sortChats(messages, info));
    // eslint-disable-next-line
  }, [messages]);

  const switchMenu = () => {
    const chatSide = document.querySelector(".switch");
    if (chatSide) {
      chatSide.classList.remove("switch");
    }
    sideMenuRef.current.classList.add("clicked");
  };

  const content =
    selectedUser !== null ? (
      <ErrorBoundary key={selectedUser.name}>
        <InfoContext.Provider
          value={{
            selectedUser,
            messages,
            setMessages,
            countMessage,
            setCountMessage,
          }}
        >
          <ChatSide />
        </InfoContext.Provider>
      </ErrorBoundary>
    ) : (
      <WaitSection>
        <WaitMessage className="wait-message">Select some chat</WaitMessage>
      </WaitSection>
    );

  //TODO: рефакторинг цієї секції
  return (
    <>
      <Container>
        <SideMenuContainer ref={sideMenuRef} className="side-container">
          <ChatList>
            {info.map(({ avatar, name, message, date }, i) => {
              const filterMessage = messages.filter(
                  (user) => user.name === name
                ),
                lastFilteredElementMessage =
                  filterMessage[filterMessage.length - 1],
                countsMessage = countMessage.filter(
                  (user) => user.name === name
                ),
                lastCountsMessage = countsMessage[countsMessage.length - 1];
              return (
                <Chat
                  key={i}
                  className="chat"
                  onClick={(e) =>
                    setSelectedUser({ avatar, name, message }, switchMenu())
                  }
                >
                  <AvatarInner>
                    <Avatar src={avatar} alt={name} />
                    <MessageCount
                      className="message-counter"
                      style={
                        countsMessage.length !== 0
                          ? countsMessage.length !== 0 &&
                            lastCountsMessage.count !== 0
                            ? displayCounter(lastCountsMessage.name, "add")
                            : null
                          : null
                      }
                    >
                      {countsMessage.length !== 0
                        ? lastCountsMessage.name === selectedUser.name &&
                          document
                            .querySelector(".side-container")
                            .classList.contains("clicked")
                          ? lastCountsMessage.count !== 0
                            ? [
                                (lastCountsMessage.count = 0),
                                displayCounter(lastCountsMessage.name, "none"),
                              ]
                            : null
                          : lastCountsMessage.count
                        : displayCounter(countMessage.name, "none")}
                    </MessageCount>
                    <AvatarInfo>
                      <AvatarName className="avatar-name">{name}</AvatarName>
                      <AvatarMessage>
                        {filterMessage.length === 0
                          ? message
                          : lastFilteredElementMessage.message.length > 30
                          ? lastFilteredElementMessage.message
                              .slice(0, 30)
                              .concat("..")
                          : lastFilteredElementMessage.message}
                      </AvatarMessage>
                    </AvatarInfo>
                  </AvatarInner>
                  <ChatDate className="message-date">
                    {filterMessage.length === 0
                      ? date
                      : lastFilteredElementMessage.date}
                  </ChatDate>
                </Chat>
              );
            })}
          </ChatList>
          <Moon
            className="fas fa-moon"
            ref={moonRef}
            onClick={() =>
              darkMode === "light" ? setDarkMode("dark") : setDarkMode("light")
            }
          />
        </SideMenuContainer>
        {content}
      </Container>
    </>
  );
};

export default SideMenu;
