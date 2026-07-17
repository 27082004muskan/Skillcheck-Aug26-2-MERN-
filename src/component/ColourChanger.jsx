import { useEffect ,useState } from "react" ;

const ColourChanger = () => {
  let arr= ["white", "lightblue", "lightgreen", "pink", "yellow"];
 const[color,setColor] = useState("white");
 const [index, setIndex] = useState(0);

 useEffect(()=>{
   document.body.style.backgroundColor = color;
   console.log(color);
 },[color]);

 const handleChange=()=>{
 const newIndex = (index + 1) % arr.length;
    setIndex(newIndex);
   setColor(arr[newIndex]);

   

 }
 

  return (
    <div>
  <div className="font-bold flex items-center justify-center min-h-screen flex-col"> 
        <h1 className=" p-10 text-4xl  text-red-400"> Background Color : {color} </h1>

      <button className=" flex justify-center items-center border p-4 rounded-2xl text-white bg-red-400"
       onClick={handleChange}>
         Change color </button>
  </div>

    </div>
  )
}

export default ColourChanger
