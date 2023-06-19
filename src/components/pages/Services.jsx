import img from '../../images/tree-felling-circle-fixed.png'
import hedge from '../../images/hedge-trimming.jpeg'
import styled from 'styled-components';

export default function Services(){
  const services= [
    {
      name: 'Tree Pruning', 
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: img
    },
    {
      name: 'Hedge Trimming', 
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: img
    },
    {
      name: 'Ivy Removal', 
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: img
    },
    {
      name: 'Hedge Trimming', 
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      image: img
    },
  ]

  return(
    <div id='services' className='mt-10'>
      <StyledAboutDiv color='#decfa2'>
        <div className='w-3/4 m-10'>
          <h1>Our Services</h1>
          <p className='mb-10'>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        {services.map(function(service, index){
          if(index === 0 || index % 2 === 0){
            return(
              <div key={index} className='flex items-center borde border-blue-500'>
                <div className='w-1/2 borde border-red-500 flex justify-center'>
                  <img className='w-1/2 rounded-full' src={service.image} alt={service.name}/>
                </div>
                <div className='w-1/2 text-left borde border-red-500'>
                  <h1>{service.name}</h1>
                  <p>{service.description}</p>
                </div>
              </div>
            );
          }
          else{
            return(
              <div key={index} className='flex  items-center borde border-blue-500'>
                <div className='w-1/2 text-right borde border-red-500'>
                  <h1>{service.name}</h1>
                  <p>{service.description}</p>
                </div>
                <div className='w-1/2 borde border-red-500 flex justify-center'>
                  <img className='w-1/2 rounded-full' src={service.image} alt={service.name}/>
                </div>
              </div>
            );

          }
        })}
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
