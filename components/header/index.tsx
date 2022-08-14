import React from "react";
import { IHeaderProps } from "../../types";
import { Logo } from "../index";
import { HeaderContainer } from "./styles";

export const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <HeaderContainer>
      <Logo />
    </HeaderContainer>
  );
};

export default Header;
