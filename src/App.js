import React from "react";
import { Navbar } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  SiteMap,
  Terms,
  BecomeAMember,
  Advertising,
  Services,
} from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <SiteMap />
              </React.Fragment>
            )}
          />
          <Route exact path="/terms" component={Terms} />
          <Route exact path="/member" component={BecomeAMember} />
          <Route exact path="/advert" component={Advertising} />
          <Route exact path="/services" component={Services} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
