import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 30px;
  padding-right: 30px;
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  box-sizing: border-box;

  box-shadow: 0 6px 13px rgb(38 78 118 / 10%);
  background-color: ${(props) => props.theme.colors["primary-pure"]};
`;
