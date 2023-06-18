import logo from './logo.svg';
import './App.css';
import Navbar from './components/main/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import img from './images/headerbg.png'
import Button from './components/buttons/Button';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
export const StateContext = React.createContext(null);

function App() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const [mobileNavOpen, setmobileNavOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => setDeviceWidth(window.innerWidth));
  }, [])

  return (
    <Router>
      <StateContext.Provider value={{mobileNavOpen: mobileNavOpen, setmobileNavOpen: setmobileNavOpen, deviceWidth: deviceWidth, setDeviceWidth: setDeviceWidth}}>
        <div className="App" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
        <Navbar/>
        <header id="home" className="App-header text-center">
          <h3>Tree Care Specialists</h3>
          <h1>Tree Services Your Area</h1>
          <Button text="Our Services" toId='about' duration={800}/>
        </header>
      </div>
      <About/>
      <Contact/>
      </StateContext.Provider>
    </Router>
  );
}

export default App;
