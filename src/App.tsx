import { Header } from "./components/Header/Header";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { Home } from "pages/Home/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <div className="mainContainer">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
