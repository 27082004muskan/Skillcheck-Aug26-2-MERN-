

const ProductCard = ({name , price, rating}) => {
  return (
 <div className=" flex justify-center items-center min-h-screen">
<div>
         <h1 className="text-4xl font-bold"> TASK-2 (Props) </h1>
  <h2>{name}</h2>
  <p>₹{price}</p>
  <p>⭐ {rating}</p>
</div>
</div>
  )
}

export default ProductCard
