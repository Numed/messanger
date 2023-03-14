import { useState, useRef, useEffect } from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";
import { LoginContext } from "../Context";
import { onDarkMode } from "../../helpers";
import { Moon } from "../SideMenu/style";
import SignInSection from "../SignIn";
import { StarField } from "starfield-react";

const App = () => {
  const [logined, setLogined] = useState(false);
  const [user, setUser] = useState();
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode"));
  const moonRef = useRef();

  useEffect(() => {
    onDarkMode(moonRef, darkMode);
    // eslint-disable-next-line
  }, [darkMode]);

  return (
    <>
      <LoginContext.Provider value={{ logined, setLogined, user, setUser }}>
        <Header />
        {logined ? <SideMenu /> : <SignInSection />}
      </LoginContext.Provider>
      <Moon
        className="fas fa-moon"
        ref={moonRef}
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
