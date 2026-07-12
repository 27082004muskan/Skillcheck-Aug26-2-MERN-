import { useState } from "react";

const ControlledComponents = () => {
  
       const[mess, setMess]=useState("");
       const[name , setName]=useState("");
       const[role, setRole]=useState("");

      const handleClick=()=>{
        if(!name || !role){
            setMess("Please fill entries completely ! ")
        }else{
   setMess("Thanks for following Muskan ! ")
        }
       
      }
    return (
      <div>
          <div className="flex justify-center items-center min-h-screen bg-amber-800">
  
          {/* -----------HEADING ------*/}
        <div className="border rounded-xl shadow-cyan-900 p-10 flex flex-col justify-center items-start gap-5 bg-white">
          <h1 className="font-black underline"> Task-6 Follow only after input</h1>
  
           {/* -----------NAME ------*/}
          Name: <input className="border rounded-2xl border-amber-200" type="text" placeholder="Enter your name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          
          ></input>
  

         {/* ----------ROLE ------*/}
           Role:  <input className="border rounded-2xl border-red-200"  type="text" placeholder="Enter your role"
           value={role}
           onChange={(e)=>setRole(e.target.value)}
           
           ></input>
  
           {/* -----------FOLLOW BUTTON ------*/}
  <button className="bg-red-100 px-4 py-4 rounded-2xl font-bold" 
  onClick={handleClick}
  > Follow </button>
  
  <p>{mess}</p>
  
        </div>
      </div>
      </div>
  )
}

export default ControlledComponents
