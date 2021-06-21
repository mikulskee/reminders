import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./hocs/globalStyles";
import { theme } from "./theme/theme";
import Home from "./containers/Home";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
};

export default App;
