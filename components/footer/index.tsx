import React from "react";
import { IFooterProps } from "../../types";
import { Logo } from "../index";
import { FooterContainer } from "./styles";

export const Footer: React.FC<IFooterProps> = ({}) => {
  return (
    <FooterContainer>
      <Logo position={"center"} />
    </FooterContainer>
  );
};

export default Footer;
