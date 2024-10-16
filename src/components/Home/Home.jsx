import "../Home/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-div">
        <h1>BONEES MOMENTOS :)</h1>
        <Link  to={"/allproducts"}>
          <button className="shop-button">SHOP NOW</button>
        </Link>
    </div>
  )
}

export default Home