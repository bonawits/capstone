import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Feed } from "./components/Feed";
import { NotFound } from "./components/NotFound/NotFound";

const App: React.FC = () => {
  return (
    <div id="root">
      <ThemeProvider>
        <CSSReset />
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              render={(props) => {
                return <Login />;
              }}
            />
            <Route
              path="/feed"
              exact
              render={(props) => {
                return <Feed />;
              }}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
