import './App.css';
import NavBar from './component/NavBar';
import Cart from './component/Cart';
import Product from './component/Product';
import {useState} from 'react';

function App() {

  const [cart, setCart] = useState([]);

  return (
    <>
      <NavBar />
      <div className='layout'>
        <Cart cart={cart} setCart={setCart}/>
        <Product cart={cart} setCart={setCart} />
      </div>
    </>
  );
}

export default App;
