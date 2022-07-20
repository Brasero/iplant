import React, { useEffect, useState } from 'react';

import { AiFillFire, AiOutlineFire } from 'react-icons/ai';

import Axios from 'axios';

import './index.css';
import { Link } from 'react-router-dom';


function Product({cart, setCart}){
    
    const [products, setProducts] = useState([]);
    const categories = products.reduce((acc, plant) => 
         acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    useEffect(() =>  {
        Axios.get('http://localhost:8888/iPlantApi').then((data) => {
            setProducts(data.data);
        })
    }, [])

    const [filtre, setFiltre] = useState('');

    const handleClick = (product) => {

        const addedPlantSaved = cart.find((plant) => plant.name === product.name)
        
        if(addedPlantSaved){
            const cartFiltered = cart.filter((cartItem) => cartItem.name !== product.name)
            setCart([...cartFiltered, {...addedPlantSaved, amount: addedPlantSaved.amount + 1}])
        } else {
            const newProduct = {name: product.name,price: product.price, id: product.id, amount: 1}
            setCart([...cart, newProduct])
        }
    }

    return (
        <>
            <div className="productCategorie">
                <select value={filtre} onChange={(e) => setFiltre(e.target.value)} className="catSelect">
                    <option value=''>----</option>
                    {
                        categories.map((cat) => {
                            return (
                                <option key={cat} value={cat} className="catOption">{cat}</option>
                            )
                        })
                    }
                </select>

                <ul className="productContainer">
                    {
                        products.map((product) => {
                           return (product.category === filtre || filtre === '') &&  (
                            <li key={product.id}>
                                <div className="price">
                                    {
                                        `${product.price} €`
                                    }
                                </div>
                                <img src={`./img/${product.img}`} alt={`${product.name}-img`} />
                                {
                                    product.name
                                }  
                                {
                                    product.isBestSale ? 
                                    <AiFillFire className="fillIcon" /> 
                                    :
                                    <AiOutlineFire />
                                } 
                                <button className="productButton" onClick={() => handleClick(product)}>
                                    +Ajouter
                                </button>
                                <button className="productButton">
                                    <Link to={`/product/${product.id}/edit`} >Modifier produit</Link>
                                </button>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Product;