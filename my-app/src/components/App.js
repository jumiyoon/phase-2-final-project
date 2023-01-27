import React, { useState, useEffect } from "react";
import Header from "./Header";
import image from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/square-background.png";
import darkImage from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/background-darkmode.png";
import LogsPage from "./LogsPage";



function App() {
  const [ allLogs, setAllLogs ] = useState([]);
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  function darkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  useEffect(() => {
    fetch("https://phase-2-final-json-server.onrender.com/reflections")
      .then((res) => res.json())
      .then((data) => setAllLogs(data))
  }, [])

   


  return (
    <div className="App" style={isDarkMode ? { backgroundImage:`url(${darkImage})`} :  { backgroundImage:`url(${image})`}}>
      <Header onDarkModeClick={darkModeClick} mode={isDarkMode} />
      <LogsPage logs={allLogs} />
    </div>
  );
}

export default App;
