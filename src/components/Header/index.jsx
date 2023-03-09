import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/https.hook";
import {
  Input,
  HeaderContainer,
  HeaderInner,
  Logo,
  InputSearch,
  CircleActive,
  Avatar,
  AvatarName,
  AvatarContainer,
  SignIn,
  SignInMessage,
  SignOut,
} from "./styles";
import { findUser } from "../../helpers";
import SignInSection from "../SignIn";
import { PopupContext } from "../Context";

const Header = () => {
  const { useDebounce } = useHttp();
  const [searchValue, setSearchValue] = useState("");
  const [logined, setLogined] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const searchTerm = useDebounce(searchValue.trim().toLowerCase(), 300);

  useEffect(() => {
    findUser(searchTerm);
    // eslint-disable-next-line
  }, [searchValue]);

  const onSignIn = () => {
    setOpenPopup(true);
  };

  const LoginContent = (logined) => {
    if (logined) {
      return (
        <>
          <Avatar>
            <CircleActive />
          </Avatar>
          <AvatarName className="welcome-message">Hello, Eugene</AvatarName>
          <SignOut>
            <i className="fas fa-sign-out-alt"></i>
          </SignOut>
        </>
      );
    } else {
      return (
        <SignIn>
          <SignInMessage className="sign-message" onClick={onSignIn}>
            Sign In
          </SignInMessage>
          <i className="fas fa-sign-in-alt"></i>
        </SignIn>
      );
    }
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>M</Logo>
        <InputSearch>
          <i className="fas fa-search" />
          <Input
            className="input-search"
            placeholder="Search.."
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
          />
        </InputSearch>
        <AvatarContainer>{LoginContent(logined)}</AvatarContainer>
      </HeaderInner>
      {openPopup ? (
        <PopupContext.Provider value={{ setLogined, setOpenPopup }}>
          <SignInSection />
        </PopupContext.Provider>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
