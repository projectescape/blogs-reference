import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/history";
import First from "./First";
import Second from "./Second";

function App() {
  return (
    <div class="container h-100 d-flex justify-content-center">
      <div class="jumbotron my-auto">
        <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/first");
                }}
              >
                First
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/second");
                }}
              >
                Second
              </button>
            </Route>
            <Route path="/first">
              <First />
            </Route>
            <Route path="/second">
              <Second />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
