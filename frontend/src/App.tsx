import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div id="root">
      <ThemeProvider>
        <CSSReset />
        <Router>
          <Switch>
            <Route path="/" exact>
              <div>login</div>
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
