import { useState, useContext, useEffect } from "react";
import io from "socket.io-client";

import { notifyAvatar } from "../../helpers/notifications";
import useRequestService from "../../services";
import { getFullDate } from "../../helpers/data";
import { InfoContext } from "../Context";
const socket = io("http://localhost:5000");

const useChatSide = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const { getJoke } = useRequestService();
  const { dateNow, dateSide } = getFullDate();
  const { selectedUser, messages, setMessages, setCountMessage } =
    useContext(InfoContext);
  const { name, avatar } = selectedUser;

  let counter = 0;

  useEffect(() => {
    socket.on("messageResponse", ({ name, message, date, dateNow, isBot }) => {
      setMessages([
        ...messages,
        {
          name,
          message,
          date,
          dateNow,
          isBot,
        },
      ]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        socket: socket.id,
        name: name,
        message: value.trim(),
        date: dateSide,
        dateNow: dateNow,
        isBot: false,
      });
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
