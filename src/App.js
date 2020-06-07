import React from "react";
import "./App.css";
import PeriodicTable from "./PeriodicTable";
// import Video from "./Video";

function App() {
  return (
    <div className="App">
      <h1>Periodic Table of Elements</h1>
      <small> with React + CSS Grid</small>
      <PeriodicTable />
      {/* <Video /> */}
    </div>
  );
}

export default App;
