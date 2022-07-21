import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import CategoryList from '../CategoryList';

import { AiFillFire, AiOutlineFire } from 'react-icons/ai';

import axios from 'axios';

import './index.css';

function Product({cart, setCart}){
    
    const [filter, setFilter] = useState('');

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8888/?action=getProducts').then((response) => {
            console.log(response.data)
            setProducts(response.data)
        })
    }, [])

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8888/?action=deleteProduct&id=${id}`).then((response) => {
            if(response.data === true){
                const newState = products.reduce((acc, prod) => prod.id === id ? acc : acc.concat(prod), [])
                setProducts(newState)
                alert('Produit supprimé')
            } else {
                alert("Une erreur s'est produite")
            }
        })
    }
    

    const categories = products.reduce((acc, plant) => 
         acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )

    const handleClick = (product) => {
        const addedPlantSaved = cart.find((prod) => prod.name === product.name)

        if(addedPlantSaved){

            const filteredCart = cart.filter((cartItem) => cartItem.name !== product.name)
            setCart([...filteredCart, {...addedPlantSaved, amount: addedPlantSaved.amount + 1}])

        } else {
            const newProduct = {...product, amount: 1}
            setCart([...cart, newProduct])
        }
    }


    return (
        <>
            <div className="productCategorie">

                <CategoryList categorys={categories} filter={filter} setFilter={setFilter} />

                <ul className="productContainer">
                    {
                        products.map((product) => {
                            return (filter === product.category) || (filter === '') ? ( 
                            
                            <li key={product.id}>
                                <div className="price">
                                    {product.price} €
                                </div>

                                <img src={`./img/${product.img}`} alt={`${product.name}-img`} />

                                {product.name} 
                                {product.isBestSale ? <AiFillFire className="fillIcon" />
                                 : 
                                <AiOutlineFire />}
                                
                                <button className="productButton" onClick={() => handleClick(product)}>
                                    +Ajouter
                                </button>

                                <Link to={`/products/update/${product.id}`}>
                                    <button className="productButton">
                                        Modifier
                                    </button>
                                </Link>

                                <button class="productButton" onClick={() => {handleDelete(product.id)}}>
                                    Supprimer
                                </button>
                            </li>) : 
                                null
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Product;