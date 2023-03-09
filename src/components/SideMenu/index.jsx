import { useEffect, useState, useRef } from "react";
import {
  Container,
  Moon,
  SideMenuContainer,
  WaitSection,
  WaitMessage,
} from "./style";
import ChatSide from "../ChatSide";
import { InfoContext, ChatListContext } from "../Context";
import ErrorBoundary from "../ErrorBoundary";
import { contacts } from "../Constants";
import { sortChats, onDarkMode } from "../../helpers";
import ChatListSection from "../ChatList";

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
      : contacts
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
          <ChatListContext.Provider
            value={{ selectedUser, setSelectedUser, countMessage, sideMenuRef, info, messages }}
          >
            <ChatListSection />
          </ChatListContext.Provider>
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
