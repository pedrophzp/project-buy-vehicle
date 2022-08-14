import { createGlobalStyle } from "styled-components";

import { reset } from "./reset";
import { scroll } from "./scroll";

export default createGlobalStyle`${reset} ${scroll}`;
