import { toast } from "react-toastify";
import ToastifyMessage from "../components/ToastifyMessage";
import "react-toastify/dist/ReactToastify.css";

export const getMonth = () => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new window.Date();
  const nameMonth = month[date.getMonth()];
  return nameMonth;
};

export const getFullDate = () => {
  const date = new window.Date().toLocaleString(),
    day = date.slice(0, 2),
    month = date.slice(3, 5),
    year = date.slice(8, 10),
    fullYear = date.slice(6, 10),
    time = date.slice(12, 17),
    nameMonth = getMonth(),
    dateSide = `${nameMonth} ${day}, ${fullYear}`,
    dateNow = `${month}/${day}/${year}, ${time}`;

  return { dateSide, dateNow };
};

export const notify = (message, avatar, name, selectedUser) => {
  const sideMenu = document.querySelector(".clicked");
  if (sideMenu && selectedUser.name === name) {
    return toast(
      <ToastifyMessage message={message} avatar={avatar} name={name} />,
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: localStorage.getItem("dark-mode"),
      }
    );
  }
};

export const sortChats = (messages, info) => {
  if (messages[messages.length - 1]) {
    const currentChat = info;
    const activeChat = currentChat.filter(
      (item) => item.name === messages[messages.length - 1]?.name
    );
    const index = info.indexOf(activeChat[0]);
    currentChat.splice(index, 1);
    currentChat.unshift(activeChat[0]);
    localStorage.setItem("history-chat-list", JSON.stringify(currentChat));
    return [...info, currentChat].slice(0, 5);
  }
};

export const displayCounter = (e, action) => {
  const chats = document.querySelectorAll(".chat"),
    avatarNames = document.querySelectorAll(".avatar-name"),
    counterMessages = document.querySelectorAll(".message-counter");
  for (const avatarName of avatarNames) {
    if (avatarName.textContent === e) {
      for (const chat of chats) {
        if (chat.contains(avatarName)) {
          for (const counterMessage of counterMessages) {
            if (chat.contains(avatarName) && chat.contains(counterMessage)) {
              if (action === "add") {
                counterMessage.classList.add("display");
              } else {
                counterMessage.classList.remove("display");
              }
            }
          }
        }
      }
    }
  }
};

export const onDarkMode = (moon, darkMode) => {
  if (!localStorage.getItem("dark-mode")) {
    moon.current.classList.add("active");
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "dark");
  } else {
    if (darkMode === "dark") {
      moon.current.classList.add("active");
      document.body.classList.add("dark-mode");
      localStorage.setItem("dark-mode", "dark");
    } else {
      moon.current.classList.remove("active");
      localStorage.setItem("dark-mode", "light");
      document.body.classList.remove("dark-mode");
    }
  }
};

export const findUser = (searchTerm) => {
  const usersName = document.querySelectorAll(".avatar-name");
  let searchData = searchTerm;
  if (searchData !== "") {
    usersName.forEach(function (e) {
      if (e.textContent.toLowerCase().search(searchData) === -1) {
        e.parentElement.parentElement.parentElement.classList.add("hide");
      } else {
        e.parentElement.parentElement.parentElement.classList.remove("hide");
      }
    });
  } else {
    usersName.forEach((e) => {
      e.parentElement.parentElement.parentElement.classList.remove("hide");
    });
  }
};
