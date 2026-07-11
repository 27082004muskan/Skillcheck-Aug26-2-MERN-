import ProductCard from "./component/ProductCard"
import ProfileCard from "./component/ProfileCard"


const App = () => {
  return (
    <div>
          
      <ProfileCard/>

      {/* TASK-2 Product Card Using Props */}
<ProductCard
  name="Wireless Headphones"
  price="2999"
  rating="4.8"
/>
    </div>



  )
}

export default App
