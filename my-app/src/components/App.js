import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import image from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/square-background.png";
import darkImage from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/background-darkmode.png";
import LogsPage from "./LogsPage";
import NavBar from "./NavBar";
import LogForm from "./LogForm";





function App() {
  const [ allLogs, setAllLogs ] = useState([]);
  const [ isDarkMode, setIsDarkMode ] = useState(false);

  function darkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  useEffect(() => {
    fetch("http://localhost:3000/reflections")
      .then((res) => res.json())
      .then((data) => setAllLogs(data))
  }, [])

  function onFormSubmit(newLog) {
    fetch("http://localhost:3000/reflections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newLog)
    })
    .then(res => res.json())
    .then(data => addLog(data)) 
  }

  function addLog(newLog){
    console.log("new log submitted!")
    const newLogList = [...allLogs, newLog]
    setAllLogs(newLogList)
  }


  return (
    <div className="App" style={isDarkMode ? { backgroundImage:`url(${darkImage})`} :  { backgroundImage:`url(${image})`}}>
      <Header onDarkModeClick={darkModeClick} mode={isDarkMode} />
      <NavBar />
        <Switch>
          <Route exact path="/logs">
            <LogsPage logs={allLogs} mode={isDarkMode} />
          </Route>
          <Route exact path="/newlog">
            <LogForm mode={isDarkMode} onFormSubmit={onFormSubmit} postRequest={addLog} />
          </Route>
          <Route exact path="/home">
            <Home mode={isDarkMode} />
          </Route>
        </Switch>
        
    </div>
  );
}

export default App;
