import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("uppercase was clicked")
    let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Text has been changed to Upper case", "success");
      
  };
  const handleDownClick = () => {
    // console.log("uppercase was clicked")
    let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text has been changed to lower case", "success");
  };
  const clearText = () => {
    // console.log("uppercase was clicked")
    let newText = "";
      setText(newText);
    props.showAlert("Text has been erased", "success");
      
      
  };
  const handleOnChange = (event) => {
    // console.log("Onchange was clicked")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color:props.mode==='dark' ? 'white' : 'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#98A8F8' : 'white', color: props.mode === 'dark'?'white':'black' }}
            id="Mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase!
        </button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>
          Convert to LowerCase!
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text!
        </button>
      </div>
      <div className="container my-3" style= {{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview ........"}</p>
      </div>
    </>
  );
}
