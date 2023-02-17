import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import image from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/square-background.png";
import darkImage from "/Users/jumiyoon/Development/code/phase-2/phase-2-final-project/my-app/src/assets/img/background-darkmode.png";
import LogsPage from "./LogsPage";
import NavBar from "./NavBar";
import LogForm from "./LogForm";
import LogCardDetail from "./LogCardDetail";


function App() {
  const [ allLogs, setAllLogs ] = useState([]);
  const [ isDarkMode, setIsDarkMode ] = useState(false);
  const [ filterBy, setFilterBy ] = useState("")
  const [ searchBy, setSearchBy ] = useState("")

  // dark mode
  function darkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode)
  }

  useEffect(() => {
    fetch("http://localhost:3000/reflections")
      .then((res) => res.json())
      .then((data) => setAllLogs(data))
  }, [])

  // submit new log 
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

  // filter logs

  function filterByCategory(categoryName){
    setFilterBy(categoryName)
  }

  const logsToDisplay = allLogs.filter((log) => {
    if (filterBy === "" || filterBy === "All") {
      return log
    } else {
      return ( filterBy === log.category)
    }
  })
  .filter((log) => {
    let lowerCaseTitle = searchBy.toLowerCase();
    return log.title.toLowerCase().startsWith(lowerCaseTitle);
  })


  function filterByTitle(title){
    setSearchBy(title)
  }

  // delete log

  function deleteLog(id) {
    const deleteId = parseInt(id);
    setAllLogs(allLogs.filter((log) => deleteId !== log.id));
    console.log("log deleted")
  }
  

  return (
    <div className="App" style={isDarkMode ? { backgroundImage:`url(${darkImage})`} :  { backgroundImage:`url(${image})`}}>
      <Header onDarkModeClick={darkModeClick} mode={isDarkMode} />
      <NavBar />
        <Routes>
          <Route path="/" element ={<Home mode={isDarkMode} />}  />
          <Route path="/logs" element =
          {<LogsPage 
              logs={logsToDisplay} 
              mode={isDarkMode} 
              filterBy={filterBy} 
              filterByCategory={filterByCategory}
              filterByTitle={filterByTitle}
              searchBy={searchBy} />} 
          />
          <Route path="/logs/:id" element ={<LogCardDetail mode={isDarkMode} deleteLog={deleteLog} /> } />
          <Route path="/newlog" element ={
            <LogForm mode={isDarkMode} onFormSubmit={onFormSubmit} postRequest={addLog} />
          } />
        </Routes>
        
    </div>
  );
}

export default App;
