import { useEffect, useState, useContext } from "react";
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
  DropdownContainer,
  DropdownMenu,
  DropdownLink,
  UpdateButton,
} from "./styles";
import { findUser } from "../../helpers";
import { LoginContext } from "../Context";

const Header = () => {
  const { useDebounce } = useHttp();
  const [searchValue, setSearchValue] = useState("");
  const searchTerm = useDebounce(searchValue.trim().toLowerCase(), 300);
  const { logined, setLogined, user, setUser } = useContext(LoginContext);

  useEffect(() => {
    findUser(searchTerm);
    // eslint-disable-next-line
  }, [searchValue]);

  const onLogout = () => {
    setLogined(false);
    setUser(null);
    localStorage.removeItem("token");
  };

  const LoginContent = () => {
    return (
      <AvatarContainer>
        <Avatar bg={user.image}>
          <CircleActive />
        </Avatar>
        <DropdownContainer>
          <i className="fa fa-caret-down" />
          <DropdownMenu className="drop-down__menu">
            <DropdownLink>
              <AvatarName className="welcome-message">
                Signed in as <span>{user.name}</span>
              </AvatarName>
            </DropdownLink>
            <DropdownLink>
              <UpdateButton>Update</UpdateButton>
            </DropdownLink>
            <DropdownLink>
              <SignOut onClick={onLogout}>Sign out</SignOut>
            </DropdownLink>
          </DropdownMenu>
        </DropdownContainer>
      </AvatarContainer>
    );
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
        {logined ? LoginContent() : <div />}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
