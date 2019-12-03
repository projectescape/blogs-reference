import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fifth from "./Fifth";

function App() {
  return (
    <div class="container h-100 d-flex justify-content-center">
      <div class="jumbotron my-auto">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              <Link class="btn btn-info btn-block" type="button" to="/first">
                Redirect Component
              </Link>
              <Link class="btn btn-info btn-block" type="button" to="/second">
                History prop
              </Link>
              <Link class="btn btn-info btn-block" type="button" to="/third">
                Using withRouter
              </Link>
              <Link class="btn btn-info btn-block" type="button" to="/fifth">
                Using useHistory Hook
              </Link>
            </Route>
            <Route path="/first">
              <First />
            </Route>
            <Route path="/second" component={Second}></Route>
            <Route path="/third">
              <Third />
            </Route>
            <Route path="/fifth">
              <Fifth />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
