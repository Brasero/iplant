import './App.css';
import NavBar from './component/NavBar';
import Cart from './component/Cart';
import Product from './component/Product';
import AddProduct from './component/AddProduct';
import UpdateProduit from './component/UpdateProduit';
import {useState} from 'react';

import {
  BrowserRouter as Router, 
  Routes, 
  Route} from 'react-router-dom';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
      <NavBar />
      <div className='layout'>
        <Routes>
          <Route path="/" element={
          <>
            <Cart cart={cart} setCart={setCart}/>
            <Product cart={cart} setCart={setCart} />
          </>} />

          <Route path="/addProduct" element={<AddProduct />} />

          <Route path="/product/:id/edit" element={<UpdateProduit />} />
        </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
