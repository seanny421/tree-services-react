import { scrollTo } from "../utils"

export default function SlideToButton({toId, toRef, text, duration, background}){
  const handleClick = () => scrollTo({id: toId, ref: toRef, duration})

  return (
    <div onClick={handleClick} 
      className={`
      border 
      py-6 px-10 m-10 
      ${background === 'black' ?
          'border-white text-white hover:text-black hover:bg-white' : 'border-black text-black hover:text-white hover:bg-black'} 
      hover:cursor-pointer`}>

      <h3>{text}</h3>
    </div>
  )
}
