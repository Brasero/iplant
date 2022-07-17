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
      <Cart cart={cart}/>
      <Product cart={cart} setCart={setCart} />
    </>
  );
}

export default App;
