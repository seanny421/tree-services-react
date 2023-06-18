import styled from "styled-components";
import { useContext } from "react"
import { StateContext } from "../../App"
export default function About(){
  const {deviceWidth} = useContext(StateContext)
  return(
    <div id="about">
      <StyledAboutDiv color="#FFF" className="">
        <h1>Expert Tree Pruning & Felling</h1>
        <p style={{width: deviceWidth > 768 ? '75%': '90%'}}>We aim to protect trees where we can and offer our customers exceptional service and quality work. With our team of qualified and passionate Arborists your trees will be in the best of hands.</p>
      </StyledAboutDiv>
    </div>
  )
}
const StyledAboutDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: ${(props) => props.color};
    width: 100%;
    min-height: 70vw;
    padding: 1rem;
    /* height: calc(var(--vh, 1vh) * 100); */
    font-family: 'Roboto';


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
