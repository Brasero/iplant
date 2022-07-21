import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import axios from "axios"


function UpdateProduct(){


    const [category, setCategory] = useState([])

    const [prod, setProd] = useState({name: '',
    price: '',
    category: '',
    isBestSale: '',
    img: ''})

    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8888/?action=getCategory').then((response) => {
            setCategory(response.data)
        })

        axios.get(`http://localhost:8888/?action=getProduct&id=${id}`).then((response) => { 
            setProd(response.data)
        })
    }, [id])


    const handleChange = (value, index) => {
        const state = {...prod}
        state[index] = value
        setProd(state)
    }

    const switchBest = () => {
        const state = { ...prod }
        state.isBestSale = !state.isBestSale
        setProd(state)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.put(`http://localhost:8888/?action=updateProduct&id=${prod.id}`, prod).then((response) => {
            if(response.data === true){
                alert('Produit modifier avec succées')
            } else {
                alert("Une erreur s'est produite")
            }
        })
    }

    return (
        <>
           <form onSubmit={(e) => {handleSubmit(e)}} >
                <input type="text" value={prod.name} 
                onChange={(e) => {handleChange(e.target.value, 'name')}} />

                <input type="text" value={prod.price}
                onChange={(e) => {handleChange(e.target.value, 'price')}}   />

                <select value={prod.category} 
                onChange={(e) => {handleChange(e.target.value, 'category')}} >
                    <option key="null" value="">----</option>
                    {
                        category.map((cat) => {
                            return (
                                <option key={`cat-${cat.id}`} value={cat.id}> 
                                    {cat.nom}
                                </option>
                            )
                        })
                    }
                </select>

                <input type="checkbox" value={prod.isBestSale} checked={prod.isBestSale ? true : false} onChange={() => {switchBest()}} />

                <input type="text" value={prod.img}
                onChange={(e) => {handleChange(e.target.value, 'img')}}  />

                <input type="submit" value="Modifier" />

            </form> 
        </>
    )
}

export default UpdateProduct