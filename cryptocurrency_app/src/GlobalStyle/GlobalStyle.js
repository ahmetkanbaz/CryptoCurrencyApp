import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${(props) => props.theme == 'light' ? '#F9F9F9' : '#333333'};
  color: ${(props) => props.theme == 'light' ? '#000000' : '#F9F9F9'};
  transition: all .3s ease-in-out;
 }
`;
