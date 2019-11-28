import React from "react";
import { Redirect } from "react-router-dom";

class First extends React.Component {
  state = { redirect: null };
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <div class="display-4 mb-1">
          All Navigations here are done using Redirect Component
        </div>
        <button
          class="btn btn-info btn-block"
          type="button"
          onClick={() => {
            this.setState({ redirect: "/" });
          }}
        >
          Root
        </button>
        <button
          class="btn btn-info btn-block"
          type="button"
          onClick={() => {
            this.setState({ redirect: "/second" });
          }}
        >
          Redirect using history.push
        </button>
        <button
          class="btn btn-info btn-block"
          type="button"
          onClick={() => {
            this.setState({ redirect: "/third" });
          }}
        >
          Redirect using withRouter
        </button>
      </>
    );
  }
}

export default First;
