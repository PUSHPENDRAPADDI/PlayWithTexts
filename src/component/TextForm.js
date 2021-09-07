import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Converted to upperCase","success")
        }
    }
    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Converted to lowerCase","success")
        }
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Text cleared","success")
        }
    }
    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Text copied","success")
        }
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Extra spaces removed","success")
        }
    }
    const handleTextReverse = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Text reversed","success")
        }
    }
    const handleWordReverse = () => {
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Words reversed in text","success")
        }
    }
    const handleUpperCaseFirst = () => {
        const text2 = text + " ";
        const arr = text2.split(" ");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const newText = arr.join(" ");
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Converted to Capitalize","success")
        }
    }
    const handleRemoveComma = () => {
        const newText = text.split(",").join("");
        setText(newText);
        if (text === "") {
            props.showAlert("Please enter some text","warning")
        }else{
            props.showAlert("Commas are removed","success")
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState('')
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="9"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert To UpperCase</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleDownClick}>Convert To LowerCase</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleCopyClick}>Copy text</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleTextReverse}>Reverse Text</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleWordReverse}>Reverse Word in Text</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleUpperCaseFirst}>Capitalize First Letter</button>
                <button disabled={text.length===0} className='btn btn-primary my-2 mx-2' onClick={handleRemoveComma}>Remove Comma </button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
                <h2>Time Require to read</h2>
                <p>{0.008 * text.split(" ").length} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in above Box"}</p>
                <h2>Vowels</h2>
                <p>{(text.match(/[aeiou]/gi) || []).length}</p>
                <h2>Consonent</h2>
                <p>{text.length - (((text.match(/[aeiou]/gi) || []).length) + text.split(" ").length - 1)}</p>
                <h2>Email Extractor</h2>
                <p>{((text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi) || []).length)}</p>
                <h2>Numbers </h2>
                <p>{(text.match(/[0-9]/gi) || []).length}</p>
            </div>
        </>
    )
}
