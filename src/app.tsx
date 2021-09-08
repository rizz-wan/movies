import "./app.scss";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./app/components/landingPage";
import { DetailedView } from "./app/components/detailedView";
import { Header, Footer } from "./app/components/common";
import { initializeIcons, loadTheme, ThemeProvider } from "@fluentui/react";
import { useState } from "react";
import { darkTheme, lightTheme } from "./app/utils/theme";

function App(): JSX.Element {
  initializeIcons();

  const [darkMode, setUseDarkMode] = useState(false);

  function onThemeChange(): void {
    setUseDarkMode(!darkMode);
  }

  return (
    <ThemeProvider
      applyTo="body"
      theme={darkMode ? loadTheme(darkTheme) : loadTheme(lightTheme)}
    >
      <div className="App">
        <Helmet defaultTitle="moVies" titleTemplate="%s - moVies"></Helmet>
        <Header onThemeChange={onThemeChange} />
        <div className="container">
          <BrowserRouter>
            <Switch>
              <Route
                path="/detail/"
                render={(): JSX.Element => {
                  return <DetailedView />;
                }}
              />
              <Route
                path="/"
                render={(): JSX.Element => {
                  return <LandingPage />;
                }}
              />
            </Switch>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
