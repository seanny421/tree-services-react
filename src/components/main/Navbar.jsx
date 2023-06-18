import { useLocation, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { StateContext } from "../../App"
import Burger from "./Burger/Burger"
import { scrollTo } from "../utils"

export default function Navbar(){
  const navigate = useNavigate()
  const location = useLocation()
  const {deviceWidth} = useContext(StateContext)
  const [scrollY, setScrollY] = useState(window.scrollY)

  function handleScroll(destination){
    scrollTo({id: destination, duration: 800})
    navigate('/' + destination)
  }

  useEffect(() => {
    //so user can see nav on white bg
    window.addEventListener('scroll', () => setScrollY(window.scrollY))
  }, [])

    return (
      <div className="fixed top-0 w-full text-white" style={{backgroundColor: scrollY > 300 ? '#000': ''}}>
        <div className="flex justify-between borde-2 border-red-500">
          <div id="logo"><h2>LOGO</h2></div>
          {deviceWidth > 768 &&
            <nav id="navbar" className="flex justify-evenly borde-2 border-green-500 w-1/3">
              <h2 onClick={() => handleScroll('home')} style={{borderBottom: location.pathname === '/' || location.pathname === '/home' ? '2px solid white' : ''}} className="cursor-pointer">Home</h2>
              <h2 onClick={() => handleScroll('about')} style={{borderBottom: location.pathname === '/about' ? '2px solid white' : ''}} className="cursor-pointer">About</h2>
              <h2 onClick={() => handleScroll('services')} style={{borderBottom: location.pathname === '/services' ? '2px solid white' : ''}} className="cursor-pointer">Services</h2>
              <h2 onClick={() => handleScroll('contact')} style={{borderBottom: location.pathname === '/contact' ? '2px solid white' : ''}} className="cursor-pointer">Contact</h2>
            </nav>
          }
          {deviceWidth < 768 && 
            <Burger/>
          }
        </div>
      </div>
    )
}
