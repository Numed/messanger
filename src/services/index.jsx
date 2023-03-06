import {
  Date,
  MyMessage,
  MyMessageText,
  MyContainer,
  MyMessageContainer,
  InterlocutorContainer,
  InterlocutorMessage,
  MessageContainer,
  MessageText,
} from "../components/ChatSide/style";
import { Avatar } from "../components/SideMenu/style";

export const CreateMyMessage = ({ message, dateNow }) => {
  return (
    <MyContainer className="my-container">
      <MyMessageContainer>
        <MyMessage className="my-message">
          <MyMessageText>{message}</MyMessageText>
        </MyMessage>
        <Date className="message-date">{dateNow}</Date>
      </MyMessageContainer>
    </MyContainer>
  );
};

export const CreateInterlocutorMessage = ({ avatar, name, value, dateNow }) => {
  return (
    <InterlocutorContainer className="interlocutor-container">
      <Avatar src={avatar} alt={name} />
      <MessageContainer>
        <InterlocutorMessage className="message-text">
          <MessageText>{value}</MessageText>
        </InterlocutorMessage>
        <Date className="message-date">{dateNow}</Date>
      </MessageContainer>
    </InterlocutorContainer>
  );
};
