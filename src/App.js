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
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const remove = () => {
    document.links[0].classList.remove('active');
    document.links[1].classList.remove('active');
    document.links[0].removeAttribute('style');
    document.links[1].removeAttribute('style');
  }
  const active = (item) =>{
    remove();
    if(item === 'home'){
      document.links[0].classList.add('active');
      document.links[0].setAttribute('style', 'border-bottom : 2px solid red')
    }
    else if(item === 'about'){
      document.links[1].classList.add('active');
      document.links[1].setAttribute('style', 'border-bottom : 2px solid red');
    }
  }
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
    <Router>
    <Navbar title='TextUtils' mode={mode} toggle={toToggle} active={active}/>
    <Alert alert={alert}/>
      <div className="container my-5">
      <Routes>
          <Route path="/about" element={<About  mode={mode}/>} />
          <Route path="/" element={<TextForm heading='Enter Your Text Here:' mode={mode} showAlert={showAlert} active={active}/>} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
