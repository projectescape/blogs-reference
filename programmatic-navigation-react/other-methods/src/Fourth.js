import React from "react";
import { withRouter } from "react-router-dom";

class Fourth extends React.Component {
  render() {
    return (
      <>
        <div class="display-4 mb-1">
          All Navigations here are done using withRouter
        </div>
        <button
          class="btn btn-info btn-block"
          type="button"
          onClick={() => {
            this.props.history.push("/");
          }}
        >
          Root
        </button>
        <button
          class="btn btn-info btn-block"
          type="button"
          onClick={() => {
            this.props.history.push("/first");
          }}
        >
          Redirect using Redirect Component
        </button>
        <button
          class="btn btn-info btn-block"
          type="button"
          onClick={() => {
            this.props.history.push("/second");
          }}
        >
          Redirect using history.push()
        </button>
      </>
    );
  }
}

export default withRouter(Fourth);
