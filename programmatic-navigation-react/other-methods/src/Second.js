import React from "react";

class Second extends React.Component {
  render() {
    return (
      <>
        <div class="display-4 mb-1">
          All Navigations here are done using this.props.history.push()
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
            this.props.history.push("/third");
          }}
        >
          Redirect using withRouter
        </button>
      </>
    );
  }
}

export default Second;
