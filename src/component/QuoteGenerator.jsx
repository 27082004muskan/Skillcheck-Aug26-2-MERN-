import {useState , useEffect} from 'react'

const QuoteGenerator = () => {
    let arr=["What we think, we become.","Dream big, start small, act now.", "Grow through what you go through.", "It always seems impossible until it's done.","No act of kindness, no matter how small, is wasted."  ]

    const[quote , newQuote]=useState(arr[0]);


     useEffect(()=>{
   console.log(quote);
 },[quote]);

    const handleChange=()=>{
       const newIndex = Math.floor(Math.random() * arr.length);
     newQuote(arr[newIndex]);
    }
  return (
    <div>
       <div className="font-bold flex items-center justify-center min-h-screen flex-col bg-blue-400"> 
        <h1 className=" p-10 text-4xl text-white"> Click to get a new Quote :  </h1>

      <button className=" flex justify-center items-center border p-4 rounded-2xl text-white bg-blue-800"
      onClick={handleChange}
       >
         Get New Quote</button>

        <p className="mt-6 text-white text-2xl">
  Today's Quote: {quote}
</p>
  </div>
    </div>
  )
}

export default QuoteGenerator
