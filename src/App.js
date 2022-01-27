import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const toToggle = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#171616';
      document.body.style.color = '#d3dbe4';
      showAlert('Dark Mode-On', 'secondary');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'rgb(240 237 237)';
      document.body.style.color = 'rgb(7 54 107)';
      showAlert('Light Mode-On', 'primary');
    }
  }
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    {/* <div className="container my-5">
      <TextForm heading='Enter Your Text Here:' mode={mode} showAlert={showAlert}/>
    </div> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title='TextUtils' mode={mode} toggle={toToggle}/>
    <Alert alert={alert}/>
      <div className="container my-5">
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading='Enter Your Text Here:' mode={mode} showAlert={showAlert}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
