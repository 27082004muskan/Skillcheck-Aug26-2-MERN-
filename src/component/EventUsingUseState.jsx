import { useState } from "react"


const EventUsingUseState = () => {

    const[message , setMessage]=useState("");
    const handleClick=()=>{
        setMessage("Thanks for following Muskan ! ")
    }
  return (
    <div>
        <div className="flex justify-center items-center min-h-screen bg-red-200">

        
      <div className="border rounded-xl shadow-cyan-900 p-10 flex flex-col justify-center items-start gap-5 bg-white">
        <h1 className="font-black underline"> Task-5 Usestate instead of Alert</h1>

        Name: <input className="border rounded-2xl border-amber-200" type="text" placeholder="Enter your name"></input>

         Role:  <input className="border rounded-2xl border-red-200"  type="text" placeholder="Enter your role"></input>

<button className="bg-red-100 px-4 py-4 rounded-2xl font-bold" 
onClick={handleClick}
> Follow </button>

<p>{message}</p>

      </div>
    </div>
    </div>
  )
}

export default EventUsingUseState
