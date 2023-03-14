import { useEffect, useState, useContext, useMemo } from "react";
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
  SignOut,
} from "./styles";
import { findUser } from "../../helpers";
import { LoginContext } from "../Context";

const Header = () => {
  const { useDebounce } = useHttp();
  const [searchValue, setSearchValue] = useState("");
  const searchTerm = useDebounce(searchValue.trim().toLowerCase(), 300);
  const { logined, setLogined, user } = useContext(LoginContext);

  useEffect(() => {
    findUser(searchTerm);
    // eslint-disable-next-line
  }, [searchValue]);

  const LoginContent = () => {
    //TODO: Запоминати user і мб ставити у localStorage
    return (
      <>
        <Avatar bg={user.image}>
          <CircleActive />
        </Avatar>
        <AvatarName className="welcome-message">Hello, {user.name}</AvatarName>
        <SignOut onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>
        </SignOut>
      </>
    );
  };

  const onLogout = () => {
    setLogined(false);
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
        <AvatarContainer>{logined ? LoginContent() : null}</AvatarContainer>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
