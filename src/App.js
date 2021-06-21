import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./hocs/globalStyles";
import { theme } from "./theme/theme";
import Home from "./containers/Home";
import Main from "./containers/Main";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Main>
        <Home />
      </Main>
    </ThemeProvider>
  );
};

export default App;
