import { useContext } from "react";
import { ChatListContext } from "../Context";

import {
  Chat,
  ChatDate,
  ChatList,
  Avatar,
  AvatarInfo,
  AvatarInner,
  AvatarMessage,
  AvatarName,
  MessageCount,
} from "../SideMenu/style";
import { displayCounter } from "../../helpers";

const ChatListSection = () => {
  const {
    selectedUser,
    setSelectedUser,
    countMessage,
    sideMenuRef,
    info,
    messages,
  } = useContext(ChatListContext);

  const switchMenu = () => {
    const chatSide = document.querySelector(".switch");
    if (chatSide) {
      chatSide.classList.remove("switch");
    }
    sideMenuRef.current.classList.add("clicked");
  };

  return (
    <ChatList>
      {info.map(({ avatar, name, message, date }, i) => {
        const filterMessage = messages.filter((user) => user.name === name),
          lastFilteredElementMessage = filterMessage[filterMessage.length - 1],
          countsMessage = countMessage.filter((user) => user.name === name),
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
                    sideMenuRef.current.classList.contains("clicked")
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
  );
};

export default ChatListSection;
