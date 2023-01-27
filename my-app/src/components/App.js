import React, { useState, useEffect } from "react";
import Header from "./Header";
import image from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/square-background.png";
import LogsPage from "./LogsPage";



function App() {
  const [ allLogs, setAllLogs ] = useState([]);

  useEffect(() => {
    fetch("https://phase-2-final-json-server.onrender.com/reflections")
      .then((res) => res.json())
      .then((data) => setAllLogs(data))
  }, [])



  return (
    <div className="App" style={{ backgroundImage:`url(${image})` }}>
      <Header />
      <LogsPage logs={allLogs} />
    </div>
  );
}

export default App;
