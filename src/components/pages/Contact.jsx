import styled from "styled-components"
import img from '../../images/headerbg.png'
import { useContext, useState } from "react"
import { StateContext } from "../../App"

export default function Contact(){
  const {deviceWidth} = useContext(StateContext)
  //info needed to send email
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleFormSubmit(){
    //check empty input fields
    
    //write email
  }

  return(
    <div id='contact' className="text-white">
      <StyledAboutDiv style={{backgroundImage: `url(${img})`, backgroundSize: 'cover'}}>
        <h1 className="mb-2">Contact</h1>
        <div className={`w-1/3 grid grid-cols-2 gap-2 text-black`}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={`p-3 ${deviceWidth < 768 ? 'col-span-2': ''}`} placeholder="Name"/>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className={`p-3 ${deviceWidth < 768 ? 'col-span-2': ''}`} placeholder="Phone No"/>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-2  p-3" placeholder="Email"/>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="col-span-2  p-3" placeholder="Message"/>

          <div onClick={handleFormSubmit} 
            className={`
            col-span-2
            text-white
            border 
            py-2 px-10 
            border-white
            hover:bg-white
            hover:text-black
            hover:cursor-pointer`}>

            <h2>Submit</h2>
          </div>
        </div>
      </StyledAboutDiv>
    </div>
  )
}

const StyledAboutDiv = styled.div`
    // border: 2px solid red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: ${(props) => props.color};
    width: 100%;
    min-height: 50vw;
    padding: 1rem;
    /* height: calc(var(--vh, 1vh) * 100); */


    @keyframes slideInFromLeft {
        0%{
            opacity: 0;
            transform: translateX(100%);
            
        }
        100%{
            transform: translateX(0) rotate(-25deg);
        }
    }
     
`
