import React, { useState } from 'react';
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

    const [filtre, setFiltre] = useState('');

    const handleClick = (product) => {

        const addedPlantSaved = cart.find((plant) => plant.name === product.name)
        
        if(addedPlantSaved){
            console.log(addedPlantSaved)
            const cartFiltered = cart.filter((cartItem) => cartItem.name !== product.name)
            setCart([...cartFiltered, {...addedPlantSaved, amount: addedPlantSaved.amount + 1}])
        } else {
            const newProduct = {name: product.name,price: product.price, id: product.id, amount: 1}
            setCart([...cart, newProduct])
        }

        //const actual = cart;
        //const newCart = actual.concat(product);
        //setCart(newCart);
    }

    return (
        <>
            <div className="productCategorie">
                <select value={filtre} onChange={(e) => setFiltre(e.target.value)}>
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
                           return (product.category === filtre || filtre === '') &&  (
                            <li key={product.id}>
                                <div className="price">
                                    {
                                        `${product.price} €`
                                    }
                                </div>
                                <img src={product.img} alt={`${product.name}-img`} />
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