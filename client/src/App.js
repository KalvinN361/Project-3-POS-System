import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Login from "./pages/Login";
import Topbar from "./components/Topbar";
import Navtabs from "./components/Navtabs";
import Entrees from "./pages/Entrees";
import Sides from "./pages/Sides";
import Desserts from "./pages/Desserts";
import Drinks from "./pages/Drinks";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Topbar />
      <Navtabs />
      <Router>
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/entrees">
              <Entrees />
            </Route>
            <Route exact path="/sides">
              <Sides />
            </Route>
            <Route exact path="/desserts">
              <Desserts />
            </Route>
            <Route exact path="/drinks">
              <Drinks />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
