import "core-js/stable";
import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";

function App() {
  // testing babel:
  console.log([3, 5, 8].includes(5));
  console.log(Array.from("test"));

  return <h1>Hello, world!</h1>;
}

ReactDOM.render(<App />, document.getElementById("root"));
