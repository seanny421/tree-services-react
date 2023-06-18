import { scrollTo } from "../utils"

export default function Button({toId, toRef, text, duration, children}){
  const handleClick = () => scrollTo({id: toId, ref: toRef, duration})

  return (
    <div onClick={handleClick} className="border border-white text-white py-6 px-10 m-10 hover:bg-white hover:text-black hover:cursor-pointer">
      <h3>{text}</h3>
    </div>
  )
}
