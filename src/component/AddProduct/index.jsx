import React, { useState } from 'react';
import CategorieList from '../CategorieList';
import axios from 'axios';

function AddProduct(){
    const [newProduct, setNewProduct] = useState({
        nom: '',
        categorie: '',
        price: '',
        isBestSale: false,
        img: '',
    });

    const switchBest = () => {
        const state = {...newProduct};
        state.isBestSale = !state.isBestSale
        setNewProduct(state);
        console.log(newProduct)
    }

    const handleChange = (name, value) => {
        const state = {...newProduct};
        state[name] = value;

        setNewProduct(state);
        console.log(state)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const posts = {...newProduct}
        axios.post('http://localhost:8888/iPlantApi', posts).then((response) => {
            response.status === 200 ? setNewProduct({
                nom: '',
                categorie: '',
                price: '',
                isBestSale: false,
                img: '',
            }) : 
            alert('Une erreur s\'est produite.')
        })

    }

    return (
        <>
            <form className="formContainer">

                <label htmlFor="nom">
                    Nom
                </label>
                <input type="text" id="nom" value={newProduct.nom} onChange={(e) => handleChange('nom', e.target.value)} />

                <label htmlFor="price">
                    Prix
                </label>
                <input type="text" id="price" value={newProduct.price} onChange={(e) => handleChange('price', e.target.value)}/>

                <label htmlFor="isBestSale">
                    Meilleure vente ?
                </label>
                <input type="checkbox" id="isBestSale" value={newProduct.nom} onClick={() => switchBest()}/>

                <CategorieList value={newProduct.categorie} changeValue={handleChange} />

                <label htmlFor="image">
                    Image
                </label>
                <input type="text" id="image" value={newProduct.img} onChange={(e) => {handleChange('img', e.target.value)}} />

                <button onClick={(e) => handleSubmit(e)} >
                    Enregistrer
                </button>
                
            </form>
        </>
    )
}

export default AddProduct;