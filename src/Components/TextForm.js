import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleDownClick = () => {
        // console.log("uppercase was clicked")
        let newText = text.toLowerCase()
        setText(newText)
    }
    const clearText = () => {
        // console.log("uppercase was clicked")
        let newText = ""
        setText(newText)
    }
    const handleOnChange = (event) => { 
        // console.log("Onchange was clicked")
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label for="Mybox" class="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="Mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick} >Convert to UpperCase!</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick} >Convert to LowerCase!</button>
            <button className="btn btn-primary mx-2" onClick={clearText} >Clear Text!</button>
            </div>
            <div className="container">
                <h1>Your Text summary</h1>
                <p>{text.split(" ").length} words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
