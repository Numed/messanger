import { useState, useEffect } from "react";
import { StarField } from "starfield-react";

import Header from "../Header";
import SideMenu from "../SideMenu";
import { LoginContext } from "../Context";
import { onDarkMode } from "../../helpers/theme";
import { Moon } from "../SideMenu/style";
import SignInSection from "../SignForms";

const App = () => {
  const [logined, setLogined] = useState(false);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode"));

  useEffect(() => {
    onDarkMode(darkMode);
    // eslint-disable-next-line
  }, [darkMode]);

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
    </>
  );
};

export default App;
