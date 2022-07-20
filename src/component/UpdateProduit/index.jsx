import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CategorieList from '../CategorieList';
import axios from 'axios';



function UpdateProduit(){

    const [product, setProduct] = useState({
        name: '',
        category: '',
        price: '',
        isBestSale: '',
        img: '',
    });

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8888/?id=${id}`).then((response) => {
            setProduct(response.data)
        })
    }, [id]);

    const handleChange = (name, value) => {
        const newState = {...product}
        newState[name] = value
        setProduct(newState)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8888/iPlantApi/?action=updateProduct&id=${product.id}`, product).then((response) => {
            if(response.data === true){
                alert('Produit modifier avec succées')
            } else {
                alert('Une erreur s\'est produite.');
            }
        })
    }

    const switchBest = () => {
        const newState = {...product}
        newState.isBestSale = !newState.isBestSale
        setProduct(newState)
    }

    return (
        <div className="updateProductContainer">
            <form className="updateForm">
                <label htmlFor="nom">
                    Nom
                </label>
                <input type="text" id="nom" value={product.name} onChange={(e) => handleChange('name', e.target.value)} />

                <label htmlFor="price">
                    Prix
                </label>
                <input type="text" id="price" value={product.price} onChange={(e) => handleChange('price', e.target.value)}/>

                <label htmlFor="isBestSale">
                    Meilleure vente ?
                </label>
                <input type="checkbox" id="isBestSale" value={product.isBestSale} onClick={() => switchBest()}/>

                <CategorieList value={product.category} changeValue={handleChange} />

                <label htmlFor="image">
                    Image
                </label>
                <input type="text" id="image" value={product.img} onChange={(e) => {handleChange('img', e.target.value)}} />

                <button onClick={(e) => handleSubmit(e)} >
                    Enregistrer
                </button>
            </form>
        </div>
    )
}

export default UpdateProduit;