// import logo from './logo.svg';
// let Name = "Ravi"
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React , {useState} from "react";
function App() {
  const [mode, setMode] = useState('light') // Tells whether the dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529';
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3 ">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;
