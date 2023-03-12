import { useState, useRef, useEffect } from "react";
import Header from "../Header";
import SideMenu from "../SideMenu";
import { LoginContext } from "../Context";
import { onDarkMode } from "../../helpers";
import { Moon } from "../SideMenu/style";
import SignInSection from "../SignIn";

const App = () => {
  const [logined, setLogined] = useState(false);
  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode"));
  const moonRef = useRef();

  useEffect(() => {
    onDarkMode(moonRef, darkMode);
    // eslint-disable-next-line
  }, [darkMode]);

  return (
    <>
      <LoginContext.Provider value={{ logined, setLogined }}>
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
    </>
  );
};

export default App;
