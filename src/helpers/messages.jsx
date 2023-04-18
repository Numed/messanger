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
  InterlocutorName,
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

export const CreateInterlocutorMessage = ({
  avatar,
  name,
  userName,
  value,
  dateNow,
}) => {
  return (
    <InterlocutorContainer className="interlocutor-container">
      <Avatar src={avatar} alt={name} />
      <MessageContainer>
        <InterlocutorName className="interlocutor-name">
          {userName !== undefined ? userName : name}
        </InterlocutorName>
        <InterlocutorMessage className="message-text">
          <MessageText className="message">{value}</MessageText>
        </InterlocutorMessage>
        <Date className="message-date">{dateNow}</Date>
      </MessageContainer>
    </InterlocutorContainer>
  );
};
