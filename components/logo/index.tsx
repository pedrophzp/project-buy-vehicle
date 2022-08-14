import React from "react";
import { ILogoProps } from "../../types";
import Image from "next/image";
import vercel from "../../public/vercel.svg";
import { LogoContainer } from "./styles";

export const Logo: React.FC<ILogoProps> = ({ position = "start" }) => {
  return (
    <LogoContainer position={position}>
      <Image alt="Vercel logo" src={vercel} width={100} height={50} />
    </LogoContainer>
  );
};

export default Logo;
