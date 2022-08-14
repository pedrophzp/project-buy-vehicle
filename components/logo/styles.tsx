import styled from "styled-components";
import { IPosition } from "../../types";

export const LogoContainer = styled.div<{ position: IPosition["variants"] }>`
  display: grid;
  justify-content: ${({ position }) => position};
`;
