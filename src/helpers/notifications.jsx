import { toast } from "react-toastify";
import ToastifyMessage from "../components/ToastifyMessage";
import "react-toastify/dist/ReactToastify.css";

export const notifyAvatar = (message, avatar, name, selectedUser) => {
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

export const notifySuccses = () => {
  return toast("Updated!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: localStorage.getItem("dark-mode"),
  });
};

export const notifyError = (error) => {
  return toast.error(`${error}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: localStorage.getItem("dark-mode"),
  });
};

export const notifyAvatarSocket = (message, avatar, name, userName) => {
  return toast(
    <ToastifyMessage
      message={message}
      avatar={avatar}
      name={name}
      userName={userName}
    />,
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
};
