import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { Footer } from "components/Footer/Footer";
import theme from "styles/theme";
import Routes from "router";
import { EventProvider } from "context/EventContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <EventProvider>
        <GlobalStyle />
        <Routes />
        <Footer />
      </EventProvider>
    </ThemeProvider>
  );
}

export default App;
