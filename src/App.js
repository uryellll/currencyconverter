import React from "react";
import "./App.css";
import Container from "./Components/Container";

function App() {
  return (
    <div className="main-container">
      <div className="flex-container">
        <Container title="FROM" />
        <Container title="TO" />
      </div>
    </div>
  );
}

export default App;
