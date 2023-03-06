import { useContext } from "react";
import {
  InterlocutorContainer,
  InterlocutorMessage,
  MessageContainer,
  MessageText,
  MyContainer,
  MyMessage,
  MyMessageText,
  Date,
} from "../ChatSide/style";
import { Avatar } from "../SideMenu/style";
import InfoContext from "../Context";

const Layout = () => {
  const { selectedUser } = useContext(InfoContext);
  const { name, avatar, message } = selectedUser;
  return (
    <>
      <InterlocutorContainer>
        <Avatar src={avatar} alt={name} />
        <MessageContainer>
          <InterlocutorMessage className="message-text">
            <MessageText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              iusto facilis accusantium ipsam voluptate asperiores perferendis
              possimus harum! Itaque est at sit deserunt expedita consequatur
              aut culpa, autem quod libero.
            </MessageText>
          </InterlocutorMessage>
          <Date className="message-date">08/15/22, 15:30</Date>
        </MessageContainer>
      </InterlocutorContainer>
      <MyContainer>
        <MessageContainer>
          <MyMessage>
            <MyMessageText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              iusto facilis accusantium.
            </MyMessageText>
          </MyMessage>
          <Date className="message-date">08/15/22, 15:38</Date>
        </MessageContainer>
      </MyContainer>
      <InterlocutorContainer>
        <Avatar src={avatar} alt={name} />
        <MessageContainer>
          <InterlocutorMessage className="message-text">
            <MessageText>{message}</MessageText>
          </InterlocutorMessage>
          <Date className="message-date">08/15/22, 15:40</Date>
        </MessageContainer>
      </InterlocutorContainer>
    </>
  );
};

export default Layout;
