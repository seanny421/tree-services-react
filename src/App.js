import logo from './logo.svg';
import './App.css';
import Navbar from './components/main/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import img from './images/headerbg.png'
import SlideToButton from './components/buttons/SlideToButton'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
export const StateContext = React.createContext(null);

function App() {
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth)
  const [mobileNavOpen, setmobileNavOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', () => setDeviceWidth(window.innerWidth));
  }, [])

  return (
    <Router>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
      <StateContext.Provider value={{mobileNavOpen: mobileNavOpen, setmobileNavOpen: setmobileNavOpen, deviceWidth: deviceWidth, setDeviceWidth: setDeviceWidth}}>
        <div className="App" style={{backgroundImage: `url(${img})`, backgroundSize: 'cover' }}>
        <Navbar/>
        <header id="home" className="App-header text-center">
          <h3>Tree Care Specialists</h3>
          <h1>Tree Services Your Area</h1>
          <SlideToButton background='black' text="Our Services" toId='about' duration={800}/>
        </header>
      </div>
      <About/>
      <Services/>
      <Contact/>
      </StateContext.Provider>
    </Router>
  );
}

export default App;
