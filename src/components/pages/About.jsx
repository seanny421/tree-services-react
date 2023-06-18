import styled from "styled-components";
import { useContext } from "react"
import { StateContext } from "../../App"
import SlideToButton from "../buttons/SlideToButton";
export default function About(){
  const {deviceWidth} = useContext(StateContext)
  return(
    <div id="about">
      <StyledAboutDiv color="#FFF" className="">
        <h1>Expert Tree Pruning & Felling</h1>
        <div style={{width: deviceWidth > 768 ? '75%': '90%'}} className="flex flex-col items-center">
          <p>
            We aim to protect trees where we can and offer our customers exceptional service and quality work. With our team of qualified and passionate Arborists your trees will be in the best of hands.
            We enjoy doing the small back garden trees as well as the 100ft giants. 
            We're landscape gardeners with a passion for great customer service.
          </p>
          <div className="w-1/2">
            <SlideToButton toId='contact' text="Free Estimates and advice" background='white'/>
          </div>
          <p>
            Trees are big green giants and they contribute towards a happy environment more than most other aspects of the natural world. We make sure that the customer is well catered for whilst keeping one eye on ensuring that the natural world continues to thrive in the local area. Whether it is tree removal, stump grinding and removal, pruning, maintenance or any kind of tree service, we have the tools and the knowledge to get the job done.
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          </p>

        </div>
      </StyledAboutDiv>
    </div>
  )
}
const StyledAboutDiv = styled.div`
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    // justify-content: center;
    background-color: ${(props) => props.color};
    width: 100%;
    min-height: 50vh;
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
