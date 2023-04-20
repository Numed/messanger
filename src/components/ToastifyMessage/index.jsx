import {
  InterlocutorContainer,
  MessageContainer,
  InterlocutorMessage,
  MessageText,
  InterlocutorName,
} from "../ChatSide/style";
import { Avatar } from "../SideMenu/style";

const ToastifyMessage = ({ avatar, name, message, userName }) => {
  return (
    <InterlocutorContainer>
      <Avatar src={avatar} alt={name} />
      <MessageContainer>
        <InterlocutorName className="interlocutor-name">
          {userName !== undefined ? userName : name}
        </InterlocutorName>
        <InterlocutorMessage className="message-text">
          <MessageText>{message}</MessageText>
        </InterlocutorMessage>
      </MessageContainer>
    </InterlocutorContainer>
  );
};

export default ToastifyMessage;
