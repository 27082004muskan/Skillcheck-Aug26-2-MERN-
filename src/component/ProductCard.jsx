

const ProductCard = ({name , price}) => {
  return (
 <div className=" flex justify-center items-center">
    <h1 className="text-4xl font-bold"> TASK-2 (Props) </h1>
<div>
         
  <h2>{name}</h2>
  <p>{price}</p>
 
</div>
</div>
  )
}

export default ProductCard
