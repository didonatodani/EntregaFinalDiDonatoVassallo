import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <img src="../portada1.jpg" alt="" />
        <Link  to={"/allproducts"}>SHOP NOW</Link>
    </div>
  )
}

export default Home