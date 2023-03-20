import { useEffect, useState, useRef } from "react";
import {
  Container,
  SideMenuContainer,
  WaitSection,
  WaitMessage,
} from "./style";
import ChatSide from "../ChatSide";
import { InfoContext, ChatListContext } from "../Context";
import ErrorBoundary from "../ErrorBoundary";
import { contacts } from "../Constants";
import { sortChats } from "../../helpers";
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

  const sideMenuRef = useRef();

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

  return (
    <>
      <Container>
        <SideMenuContainer ref={sideMenuRef} className="side-container">
          <ChatListContext.Provider
            value={{
              selectedUser,
              setSelectedUser,
              countMessage,
              sideMenuRef,
              info,
              messages,
            }}
          >
            <ChatListSection />
          </ChatListContext.Provider>
        </SideMenuContainer>
        {content}
      </Container>
    </>
  );
};

export default SideMenu;
