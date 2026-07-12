import ControlledComponents from "./component/ControlledComponents";
import EventHandling from "./component/EventHandling";
import EventUsingUseState from "./component/EventUsingUseState";
import ProductCard from "./component/ProductCard"
import ProfileCard from "./component/ProfileCard"


const App = () => {

  const products = [
  { name: "iPhone", price: 80000 },
  { name: "Samsung", price: 70000 },
  { name: "OnePlus", price: 50000 }
];

  return (
    <div>
          
      <ProfileCard/>

      {/* TASK-2 Product Card Using Props */}
      {/* <ProductCard
      name="Wireless Headphones"
      price="2999"
      rating="4.8"
        /> */}


      {/* TASK- 3 Product Card Using Map */}
      {products.map((products)=>
      (
             <ProductCard
             key={products.name}
        name={products.name}
        price={products.price}
      />
      ))}

{/* TASK- 4 Using onclick-alert on a button */}
<EventHandling/>

{/* TASK- 5 Using useState instead of alert */}
<EventUsingUseState/>

{/* Task-5 ( Controlled Components - input dene ke baad he usestate/Alert work kare )*/}
<ControlledComponents/>
    </div>
  )
}

export default App
