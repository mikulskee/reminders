import React from "react";
import { ThemeProvider } from "styled-components";
import RemindersContext from "./contexts/RemindersContext/RemindersContext";
import { GlobalStyles } from "./hocs/globalStyles";
import { theme } from "./theme/theme";
import Home from "./containers/Home";
import Main from "./containers/Main";

const App = () => {
  return (
    <RemindersContext>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Main>
          <Home />
        </Main>
      </ThemeProvider>
    </RemindersContext>
  );
};

export default App;
