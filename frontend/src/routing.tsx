import React from "react";
import Auth from "./auth/Auth";
import { Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import App from "./App";
import { Flex, Spinner } from "@chakra-ui/core";
const history = createHistory();

const auth = new Auth(history);

const handleAuthentication = (props: any) => {
  const location = props.location;
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

export const makeAuthRouting = () => {
  return (
    <Router history={history}>
      <div>
        <Route
          path="/callback"
          render={(props) => {
            handleAuthentication(props);
            return (
              <Flex
                width="100%"
                height="100vh"
                alignItems="center"
                justifyContent="cemter"
              >
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="black.500"
                  size="xl"
                />
              </Flex>
            );
          }}
        />
        <Route
          render={(props) => {
            return <App auth={auth} {...props} />;
          }}
        />
      </div>
    </Router>
  );
};
