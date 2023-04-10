import { useEffect, useState, useContext } from "react";
import { FaSearch, FaCaretDown } from "react-icons/fa";

import { useHttp } from "../../hooks/https.hook";
import {
  Input,
  HeaderContainer,
  HeaderInner,
  Logo,
  InputSearch,
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
import { LoginContext, PopupContext } from "../Context";
import UpdrageSection from "../UpdrageSection";
import avatarTemplate from "../../img/avatar.png";

const Header = () => {
  const { useDebounce } = useHttp();
  const [searchValue, setSearchValue] = useState("");
  const [isOpenPopup, setOpenPopup] = useState(false);
  const searchTerm = useDebounce(searchValue.trim().toLowerCase(), 200);
  const { logined, setLogined, user, setUser } = useContext(LoginContext);

  useEffect(() => {
    findUser(searchTerm);
    // eslint-disable-next-line
  }, [searchValue]);

  const onLogout = () => {
    setLogined(false);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("logined");
  };

  const LoginContent = () => {
    return (
      <AvatarContainer>
        <Avatar bg={user !== null ? user.image : avatarTemplate} />
        <DropdownContainer>
          <FaCaretDown className="fa fa-caret-down" />
          <DropdownMenu className="drop-down__menu">
            <DropdownLink>
              <AvatarName className="welcome-message">
                Signed in as <span>{user !== null ? user.name : "User"}</span>
              </AvatarName>
            </DropdownLink>
            <DropdownLink>
              <UpdateButton onClick={() => setOpenPopup(true)}>
                Update
              </UpdateButton>
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
          <FaSearch className="fas fa-search" />
          <Input
            className="input-search"
            placeholder="Search.."
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
          />
        </InputSearch>
        {logined ? LoginContent() : <div />}
        {isOpenPopup ? (
          <PopupContext.Provider value={{ setOpenPopup }}>
            <UpdrageSection />
          </PopupContext.Provider>
        ) : null}
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
