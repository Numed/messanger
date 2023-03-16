import { toast } from "react-toastify";
import ToastifyMessage from "../components/ToastifyMessage";
import "react-toastify/dist/ReactToastify.css";

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
