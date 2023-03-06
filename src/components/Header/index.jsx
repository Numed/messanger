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
} from "./styles";
import { findUser } from "../../helpers";

const Header = () => {
  const { useDebounce } = useHttp();
  const [searchValue, setSearchValue] = useState("");
  const searchTerm = useDebounce(searchValue.trim().toLowerCase(), 300);

  useEffect(() => {
    findUser(searchTerm);
    // eslint-disable-next-line
  }, [searchValue]);

  return (
    <HeaderContainer>
      <HeaderInner>
        <Logo>M</Logo>
        <InputSearch>
          <i className="fas fa-search"></i>
          <Input
            className="input-search"
            placeholder="Search.."
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
          />
        </InputSearch>
        <Avatar>
          <CircleActive />
        </Avatar>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
