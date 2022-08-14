import { ThemeProvider } from "styled-components";
import { Project } from "../themes";
import GlobalStyles from "../global-styles";
import { Head } from "../components";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Project}>
      <GlobalStyles />
      <Head />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
