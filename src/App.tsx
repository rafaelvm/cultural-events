import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Footer } from "components/Footer/Footer";
import theme from "styles/theme";
import Routes from "router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
