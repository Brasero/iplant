import React from 'react';
import {plantList} from '../../data/plantList/plantList';

import { AiFillFire, AiOutlineFire } from 'react-icons/ai';

import './index.css';

function Product({cart, setCart}){
    
    const products = plantList;
    const categories = plantList.reduce((acc, plant) => 
         acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    const handleClick = (product) => {
        const actual = cart;
        const newCart = actual.concat(product);
        setCart(newCart);
    }

    return (
        <>
            <div className="productCategorie">
                <select value="">
                    <option value=''>----</option>
                    {
                        categories.map((cat) => {
                            return (
                                <option key={cat} value={cat}>{cat}</option>
                            )
                        })
                    }
                </select>

                <ul className="productContainer">
                    {
                        products.map((product) => {
                            return <li key={product.id}>
                                <div className="price">{product.price} €</div>
                                <img src={product.img} alt={`${product.name}-img`} />
                                {product.name}  {product.isBestSale ? <AiFillFire className="fillIcon" /> : <AiOutlineFire />} <button className="productButton" onClick={() => handleClick(product)}>+Ajouter</button></li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Product;