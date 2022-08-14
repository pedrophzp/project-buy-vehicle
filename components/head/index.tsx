import React, { useContext } from "react";
import Head from "next/head";
import { ThemeContext } from "styled-components";

export const HeadComponent = () => {
  const theme = useContext(ThemeContext);
  return (
    <Head>
      <title>{theme?.name}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
};

export default HeadComponent;
