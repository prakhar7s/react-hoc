import React from "react";

import SingleFile from "./components/single-file/single-file.component";

import "./App.scss";
import MulFiles from "./components/mul-files/mul-files.component";

const App = () => {
  return (
    <div className="app">
      <SingleFile />
      <MulFiles />
    </div>
  );
};

export default App;
