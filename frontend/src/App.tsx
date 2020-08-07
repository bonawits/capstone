import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./components/Login";

const App: React.FC = () => {
  return (
    <div id="root">
      <ThemeProvider>
        <CSSReset />
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/feed" exact>
              <div>feed</div>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
