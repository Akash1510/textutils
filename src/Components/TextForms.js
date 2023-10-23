import React,  {useState} from 'react'

export default function TextForms(props) {
 const handleUpClick=()=>{
  console.log("uppercase is CliCked "+text);
  const newtext=text.toUpperCase();
  props.showalert(" Converted to uppercase","success")

  settext(newtext);

  }
  const handleLowClick=()=>{
    const newtext=text.toLowerCase();
    settext(newtext);
    props.showalert(" Converted Lowercase","success")

  }
  const handleClearClick=()=>{
    const newtext=" ";
    settext(newtext);
    props.showalert(" Textarea is Cleared","success")

  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    settext(event.target.value)
  }



  const [text ,settext]=useState("");
  return (
  <>
  <div style={{color:props.mode==='dark'?'white':'black'}}>

  <h1>{props.heading}</h1>
   <div className="mb-3">

    <textarea className="form-control" id="Comments" rows="6" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
  </div>
  <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert To UpperCase</button>
  <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleLowClick}>Convert To Lowercase</button>
  <button type="button" className="btn btn-primary mx-2 my-3" onClick={handleClearClick}>Clear Text</button>
  </div>
  <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>

   <h1>Your Text Summery</h1>
   <p>{((text.split(" ").length))}  Words and {text.length} Characters </p>

   <p>{0.008*text.split(" ").length} Minute to Read</p>

   <h2>Preview</h2>
   <p>{text.length>0?text:"Enter Something in the textbox above to previvew it here"}</p>


  </div>
  </>

  );
}
