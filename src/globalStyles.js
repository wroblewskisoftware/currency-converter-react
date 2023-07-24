import { createGlobalStyle } from "styled-components";
import background from "./background.jpg";

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  height: 100%;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Lato', sans-serif;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 30px 20px;
}
`;

export default GlobalStyle;
