

const EventHandling = () => {
    const handleClick = () => {
  alert("Thanks for following Muskan!");
};
  return (


    <div className="flex justify-center items-center min-h-screen bg-amber-200">

        
      <div className="border rounded-xl shadow-cyan-900 p-10 flex flex-col justify-center items-start gap-5 bg-white">
        <h1 className="font-black underline"> Task-4 Alert system</h1>
        Name: <input className="border rounded-2xl border-amber-200" type="text" placeholder="Enter your name"></input>
         Role:  <input className="border rounded-2xl border-amber-200"  type="text" placeholder="Enter your role"></input>

<button className="bg-amber-100 px-4 py-4 rounded-2xl font-bold" 
onClick={handleClick}
> Follow </button>
      </div>
    </div>
  )
}

export default EventHandling
