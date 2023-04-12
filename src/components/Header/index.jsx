import { useEffect, useState, useContext } from "react";
import { FaSearch, FaCaretDown } from "react-icons/fa";
import "react-loading-skeleton/dist/skeleton.css";

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
import { SingleSkeleton, CircleSkeleton } from "../../helpers/skeleton";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isOpenPopup, setOpenPopup] = useState(false);
  const searchTerm = searchValue.trim().toLowerCase();
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
        {user !== null ? <Avatar bg={user.image} /> : <CircleSkeleton />}
        <DropdownContainer>
          <FaCaretDown className="fa fa-caret-down" />
          <DropdownMenu className="drop-down__menu">
            <DropdownLink>
              {user !== null ? (
                <AvatarName className="welcome-message">
                  Signed in as <span>{user.name}</span>
                </AvatarName>
              ) : (
                <SingleSkeleton />
              )}
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
