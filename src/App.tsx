import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./theme/globalStyle";
import { lightColors } from "./theme";
import { About, Footer, Resume, SceneWrapper, Tech } from "./components";

const App: React.FC = () => {
  const colors = lightColors;
  const theme = {
    ...colors,
  };
  return (
    <ThemeProvider theme={theme}>
      <SceneWrapper>
        <>
          <Resume />
          <About />
          <Tech />
          <Footer />
        </>
      </SceneWrapper>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
