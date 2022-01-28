import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const ct_word = () =>{
        return text.split(/\s+/).filter((Element) => {return Element.length !== 0}).length;
    }
    const toStyle_d = {
         border : "5px solid #c7bebe",
         backgroundColor : '#1f1d1d',
         fontWeight : "bold",
         color : "white",
     }
    const toStyle_l = {
        border : "5px solid black",
        backgroundColor : 'white',
        fontWeight : "bold",
        color : "black",
    }
    const toClear = ()=>{
        setText('');
        if(text.length > 0) props.showAlert('Cleared Successfully', 'success');
    }
    const toCopyText = ()=>{
        navigator.clipboard.writeText(text);
        if(text.length > 0) props.showAlert('Copied Successfully', 'success');
    }
    const toUpperCase = ()=>{
        let updatedText = text.toUpperCase();
        setText(updatedText);
        if(text.length > 0) props.showAlert('Converted To Upper Case Successfully', 'success');
    }

    const toRemoveExtraSpace = ()=>{
        let removeExtraSpace = text.split(/[ ]+/);
        setText(removeExtraSpace.join(" "));
        if(text.length > 0) props.showAlert('Extra Space Removed Successfully', 'success');
    }
    const toLowerCase = ()=>{
        let updatedText = text.toLowerCase();
        setText(updatedText);
        if(text.length > 0) props.showAlert('Converted To Lower Case Successfully', 'success');
    }
    const onHandleChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return ( 
    <>
    <div>
        <h5>{props.heading}</h5>
        <div className="mb-3">
        <textarea className="form-control" onChange={onHandleChange} value={text} id="myBox" rows="7" style={props.mode === 'light' ? toStyle_l : toStyle_d} spellCheck='false'></textarea>
        </div>
        <button type="button" onClick={toClear} className="btn btn-danger my-3 mx-2">Clear</button>
        <button type="button" onClick={toCopyText} className="btn btn-success my-3 mx-2">Copy</button>
        <button type="button" onClick={toUpperCase} className={`btn btn-${props.mode=== 'light' ? 'primary' : 'secondary'} my-3 mx-2`}>Upper Case</button>
        <button type="button" onClick={toLowerCase} className={`btn btn-${props.mode=== 'light' ? 'primary' : 'secondary'} my-3 mx-2`}>Lower Case</button>
        <button type="button" onClick={toRemoveExtraSpace} className={`btn btn-${props.mode=== 'light' ? 'primary' : 'secondary'} my-3 mx-2`}>Remove Extra Space</button>
    </div>
    <div className="container">
        <h4>Your Text Summary</h4>
        <p>Word: {ct_word()} Character: {text.length - text.split(' ').length + 1}</p>
        <p>Minutes Read: {0.008 * ct_word()}</p>
    </div>
    <div className="container">
        <h5>Preview</h5>
        <p>{text.length > 0 ? text : 'Enter some text above to preview it here...'}</p>
    </div>
    </> 
  )
}

TextForm.propTypes = {
    heading: PropTypes.string
}

TextForm.defaultProps = {
    heading: 'Enter Text'
}
