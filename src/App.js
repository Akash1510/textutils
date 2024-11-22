// import logo from './logo.svg';
import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar.js";
import TextForms from "./Components/TextForms";
import Alert from "./Components/Alert";

//using the React Routers 
import {
  BrowserRouter as Router,
  Routes,
  Route,
 

} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  //whether the dark mode is Enable or not
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null)
      
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showalert(" Dark mode Is Enabled", "success");
      document.title='Textutils-Dark Mode';
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert(" Light mode Is Enabled", "success");
      document.title='Textutils-Light Mode';
    }
  };
  return (
    <>

    <Router>
      <Navbar
        title="AkashTech1"
        abouttext="AboutUs"
        mode={mode}
        togglemode={togglemode}
        />



      {/* <Navbar title="Akash Tech" About="About us" mode={mode} togglemode={togglemode} /> */}
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/"element={<TextForms showalert={showalert} heading="Lower to uppercase Converter" my-1 mode={mode}/>}/>
          
          <Route exact path="/about"
  element ={<About mode={mode}/>}/>
      
     </Routes>
      </div>
      
    </Router>
      
        
    
        {/* <TextForms showalert={showalert} heading="Lower to uppercase Converter" my-1 mode={mode} />
        <About /> */}
    </>
  );
}

export default App;


// for deployon git hub
// npm run build
// run  npm i --save gh-pages
// run npm run deploy

// add above name in package.json
// "homepage": "https://Akash1510.github.io/Text_Converter_App/",

// Add in the Scripts in package.json
   // "predeploy": "npm run build",
    // "deploy": "gh-pages -d build",