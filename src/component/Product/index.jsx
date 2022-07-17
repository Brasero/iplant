import React from 'react';
import {plantList} from '../../data/plantList/plantList';

import { AiFillFire, AiOutlineFire } from 'react-icons/ai';

import './index.css';

//const categori = plantList.reduce(() => {}, [])

//Créer une liste de category extraite de la list des plantes, et afficher cet liste au dessus de la liste des plantes

//Renseigner les key de vos li

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
            <ul>
                {categories.map((cat) => {
                    return <li key={cat}>{cat}</li>
                })}
            </ul>
            <ul className="productContainer">
                {
                    products.map((product) => {
                        return <li key={product.id}>{product.name} : {product.price}€ {product.isBestSale ? <AiFillFire className="fillIcon" /> : <AiOutlineFire />} <button className="productButton" onClick={() => handleClick(product)}>+Ajouter</button></li>
                    })
                }
            </ul>
        </>
    )
}

export default Product;