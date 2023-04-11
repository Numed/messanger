export const sortChats = (messages, info) => {
  if (messages[messages.length - 1]) {
    const currentChat = info;
    const activeChat = currentChat.filter(
      (item) => item.name === messages[messages.length - 1]?.name
    );
    const index = info.indexOf(activeChat[0]);
    currentChat.splice(index, 1);
    currentChat.unshift(activeChat[0]);
    return [...info, currentChat].slice(0, 6);
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
