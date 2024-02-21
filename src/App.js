// import logo from './logo.svg';
// let Name = "Ravi"

import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React,{useState} from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light') // Tells whether the dark mode is enabled or not
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '   #150050';
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils- Dark Mode "
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils- Light Mode "
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
             <Route path="/about">
              <About mode = {mode} />
            </Route>
            <Route path="/">
             <TextForm showAlert={showAlert} heading="TextUtils- Word Counter,  Character Counter, to UpperCase, to LowerCase" mode={mode} />
            </Route>
        </Switch>
      </div>
      </Router>

    </>
  );
}

export default App;
