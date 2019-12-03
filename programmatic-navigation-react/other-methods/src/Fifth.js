import React from "react";
import { useHistory } from "react-router-dom";

function Fifth() {
  let history = useHistory();

  return (
    <>
      <div class="display-4 mb-1">
        All Navigations here are done using useHistory Hook
      </div>
      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Root
      </button>
      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/first");
        }}
      >
        Redirect using Redirect Component
      </button>
      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/second");
        }}
      >
        Redirect using history.push
      </button>
      <button
        class="btn btn-info btn-block"
        type="button"
        onClick={() => {
          history.push("/third");
        }}
      >
        Redirect using withRouter
      </button>
    </>
  );
}

export default Fifth;
