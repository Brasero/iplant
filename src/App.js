import './App.css';
import NavBar from './component/NavBar';
import Cart from './component/Cart';
import Product from './component/Product';
import AddProduct from './component/AddProduct';
import UpdateProduct from './component/UpdateProduct';
import {useState} from 'react';
import {BrowserRouter as Router,
        Routes, Route} from 'react-router-dom'

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <NavBar />
        <div className='layout'>
        <Routes>
          <Route path="/" element={<>
            <Cart cart={cart} setCart={setCart}/>
            <Product cart={cart} setCart={setCart} />
          </>} />
        
          <Route path="/products/add" element={<AddProduct />} />

          <Route path="/products/update/:id" element={<UpdateProduct />} />

        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
