import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import background from "./background.jpg";

const GlobalStyle = createGlobalStyle`
${normalize}

html {
  box-sizing: border-box;
  height: 100%;
}

*, ::after, ::before {
  box-sizing: inherit;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  background-image: url("${background}");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  padding: 30px 20px;
  max-width: 700px;
  margin: 0 auto;
}
`;

export default GlobalStyle;
