import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import CheckOut from './components/CheckOut/CheckOut'
import Home from './components/Home/Home'
import WorkInProgress from './components/WorkInProgress/WorkInProgress'
import { CartProvider } from './context/CartContext'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/allproducts' element={<ItemListContainer/>}/>
            <Route path='/category/:idCategory' element={<ItemListContainer/>}/>
            <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
            <Route path='/aboutus' element={<WorkInProgress/>}/>
          </Routes>
          <Footer/>
        </CartProvider>
        <ToastContainer/>
      </BrowserRouter>
    </>
  )
}

export default App
