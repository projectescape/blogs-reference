import React from "react";
import history from "./utils/history";

function Second() {
  return (
    <>
      <div class="display-4 mb-1">This is the Second Route</div>
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
        First
      </button>
    </>
  );
}

export default Second;
