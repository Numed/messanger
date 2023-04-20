import { useState, useContext, useEffect } from "react";
import io from "socket.io-client";

import { notifyAvatarSocket, notifyAvatar } from "../../helpers/notifications";
import useRequestService from "../../services";
import { getFullDate } from "../../helpers/data";
import { InfoContext, LoginContext } from "../Context";

const options = {
  "force new connection": true,
  reconnectionAttempts: "Infinity",
  timeout: 10000,
  transports: ["websocket"],
};

let socket = io(process.env.REACT_APP_FETCH_BASE, options);

const useChatSide = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { getJoke } = useRequestService();
  const { dateNow, dateSide } = getFullDate();
  const { selectedUser, messages, setMessages, setCountMessage } =
    useContext(InfoContext);
  const { user } = useContext(LoginContext);
  const { name, avatar } = selectedUser;

  let counter = 0;

  useEffect(() => {
    socket.on(
      "messageResponse",
      ({ name, userName, message, avatar, date, dateNow, isBot }) => {
        if (selectedUser.name !== name) {
          return onReceive(
            name,
            userName,
            message,
            avatar,
            date,
            dateNow,
            isBot
          );
        }
      }
    );
    return () => {
      socket.off("messageResponse");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onReceive = (name, userName, message, avatar, date, dateNow, isBot) => {
    if (loading === true) return;
    setMessages([
      ...messages,
      {
        userName,
        name,
        avatar,
        message,
        date,
        dateNow,
        isBot,
      },
    ]);
    setCountMessage((old) => [...old, { name, count: counter++ }]);
    notifyAvatarSocket(message, avatar, userName, userName);
    setLoading(false);
    return counter;
  };

  const handlerSubmit = async () => {
    if (value !== "") {
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

  const socketSubmit = () => {
    if (value !== "") {
      socket.emit("socketSubmit", {
        name: name,
        avatar: user.image,
        userName: user.name,
        date: dateSide,
        message: value.trim(),
        dateNow: dateNow,
        isBot: true,
      });
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
    }
  };

  const onRequest = () => {
    getJoke().then(onGetJoke).catch(onError);
  };

  const onGetJoke = async (info) => {
    setTimeout(() => {
      setCountMessage((old) => [
        ...old,
        { name: selectedUser.name, count: counter++ },
      ]);
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
      notifyAvatar(info.value, avatar, name, selectedUser);
    }, 10000);
    return counter;
  };

  const onError = () => {
    setError(true);
  };

  return {
    onError,
    onGetJoke,
    handlerSubmit,
    value,
    setValue,
    error,
    setError,
    socketSubmit,
  };
};

export default useChatSide;
