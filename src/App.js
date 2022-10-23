// import logo from './logo.svg';
// let Name = "Ravi"
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";

import React , {useState} from "react";
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
    },2000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '   #150050';
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")

    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3 ">
        <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
