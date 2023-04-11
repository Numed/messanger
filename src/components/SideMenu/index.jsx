import { useEffect, useState, useRef, useContext } from "react";
import "react-loading-skeleton/dist/skeleton.css";

import {
  Container,
  SideMenuContainer,
  WaitSection,
  WaitMessage,
} from "./style";
import ChatSide from "../ChatSide";
import { InfoContext, ChatListContext, LoginContext } from "../Context";
import ErrorBoundary from "../ErrorBoundary";
import { contacts } from "../Constants";
import { sortChats } from "../../helpers";
import ChatListSection from "../ChatList";
import useRequestService from "../../services";
import { notifyError } from "../../helpers/notifications";
import { ListSkeleton } from "../../helpers/skeleton";

const SideMenu = () => {
  const { user } = useContext(LoginContext);

  const [info, setInfo] = useState(contacts);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(contacts);
  const [countMessage, setCountMessage] = useState([]);

  const sideMenuRef = useRef();
  const { saveMessagesUser } = useRequestService();

  useEffect(() => {
    if (user !== null) {
      setMessages(user.messages.historyMessages);
      setInfo(user.messages.historyOrder);
    }
  }, [user]);

  useEffect(() => {
    if (messages.length >= 8) {
      if (user !== null) {
        const data = {
          email: user.email,
          historyMessages: [...messages],
          historyOrder: [...info],
        };
        saveMessagesUser(data).then(onReceive).catch(onError);
      }
    }
    // eslint-disable-next-line
  }, [messages]);

  const onReceive = () => {
    setInfo(sortChats(messages, info));
  };

  const onError = (error) => {
    notifyError(error);
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

  return (
    <>
      <Container>
        {user !== null ? (
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
        ) : (
          ListSkeleton()
        )}

        {content}
      </Container>
    </>
  );
};

export default SideMenu;
