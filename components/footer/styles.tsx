import styled from "styled-components";

export const FooterContainer = styled.footer`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  padding-top: 48px;
  padding-bottom: 32px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${(props) => props.theme.colors["primary-pure"]};
`;
