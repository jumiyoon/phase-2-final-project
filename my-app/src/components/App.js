import React from "react";
import Header from "./Header";
import image from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/square-background.png";

function App() {
  return (
    <div style={{ backgroundImage:`url(${image})` }}>
      <Header />
    </div>
  );
}

export default App;
