import React from "react";
import Auth from "./auth/Auth";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Feed } from "./components/Feed";
import { NotFound } from "./components/NotFound/NotFound";

export interface AppProps {
  auth: Auth;
  history: any;
}

const App: React.FC<AppProps> = ({ auth, history }) => {
  const generatePage = () => {
    if (!auth.isAuthenticated()) {
      return <Login auth={auth} />;
    }

    return (
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => {
            return <Feed auth={auth} {...props} />;
          }}
        />
        <Route component={NotFound} />
      </Switch>
    );
  };

  return (
    <div id="root">
      <ThemeProvider>
        <CSSReset />
        <Router history={history}>{generatePage()}</Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
