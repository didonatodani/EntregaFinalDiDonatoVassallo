import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link , NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
          <img className="logo" src="../logo.png" alt="logo Bonees" />
      </Link>
      <nav>
        <ul>
          <li>
              <NavLink to={"/"}>HOME</NavLink>
          </li>
          <li>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">SHOP</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/allproducts">ALL PRODUCTS</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/category/tees">TEES</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/category/bags">BAGS</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/category/sweatshirts">SWEATSHIRTS</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>            
          </li>
          <li>
              <NavLink to={"/aboutus"}>ABOUT US</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
};

export default NavBar