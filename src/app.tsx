import "./app.scss";
import { Helmet } from "react-helmet";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./app/components/landingPage";
import { Header, Footer } from "./app/components/common";

function App(): JSX.Element {
  return (
    <div className="App">
      <Helmet defaultTitle="moVies" titleTemplate="%s - moVies"></Helmet>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            render={(): JSX.Element => {
              return <LandingPage />;
            }}
          />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
