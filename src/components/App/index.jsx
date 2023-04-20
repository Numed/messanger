import { useState, useEffect } from "react";
import { StarField } from "starfield-react";
import jwt_decode from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "../Header";
import SideMenu from "../SideMenu";
import { LoginContext } from "../Context";
import { onDarkMode } from "../../helpers/theme";
import { Moon } from "../SideMenu/style";
import SignInSection from "../SignForms";
import useRequestService from "../../services/index";
import { notifyError } from "../../helpers/notifications";

const App = () => {
  const [logined, setLogined] = useState(
    localStorage.getItem("logined") || false
  );
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode"));
  const { findUser } = useRequestService();

  useEffect(() => {
    onDarkMode(darkMode);
    // eslint-disable-next-line
  }, [darkMode]);

  useEffect(() => {
    if (localStorage.getItem("token") === null) return;
    const data = {
      id: jwt_decode(localStorage.getItem("token")).userId,
    };
    findUser(data).then(onReceive).catch(onError);
    // eslint-disable-next-line
  }, []);

  const onReceive = (data) => {
    setUser({
      name: data.name,
      image: data.image,
      email: data.email,
      token: data.token,
      messages: data.messages,
    });
    localStorage.setItem("token", data.token);
    localStorage.setItem("logined", true);
    setLogined(true);
  };

  const onError = (e) => {
    notifyError(e);
  };

  return (
    <>
      <LoginContext.Provider value={{ logined, setLogined, user, setUser }}>
        <Header />
        {logined ? <SideMenu /> : <SignInSection />}
      </LoginContext.Provider>
      <Moon
        color={darkMode === "light" ? "#333" : "#fede00"}
        onClick={() =>
          darkMode === "light" ? setDarkMode("dark") : setDarkMode("light")
        }
      />
      <StarField
        style={{
          position: "absolute",
          width: "100%",
          height: "90%",
          zIndex: "-1",
          top: "10%",
        }}
        speed={3}
        count={200}
        fps={60}
        width={window.innerWidth}
        noBackground
        starStyle={darkMode === "dark" ? "#fff" : "#000"}
        starSize={1}
        starShape="butt"
        starRatio={356}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={localStorage.getItem("theme")}
      />
    </>
  );
};

export default App;
