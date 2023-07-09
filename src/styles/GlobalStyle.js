import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary_color: #1a2f80;
    --primary_color_100: #1a2e80ca;
    --secondary_color: #EF3940;
    --secondary_color_100: #ef393fdb;
    --text_black_100: #1A1A1A;
    --white: #ffffff;
    --white_100: #f7f7f7;
    --shadow_white: #DFDFDF;
    --shadow: #00000040;
    --overlay: #ffffffc6;
    --pro_overlay: #000207e8
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: var(--text_black_100);
    font-family: "Montserrat", sans-serif;
    font-size: 90%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    height: inherit;
    width: inherit;
  }
`;
export default GlobalStyle;
