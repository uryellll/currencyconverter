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
      <button>Convert</button>
      //Move the button to the bottom of the page in app.css
    </div>
  );
}

export default App;
