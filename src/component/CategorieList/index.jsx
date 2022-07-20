import React, {useEffect, useState} from 'react';
import axios from 'axios';

function CategorieList({value, changeValue}){

    const [categorie, setCategorie] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8888/iPlantApi/?get=categorie').then((response) => {
            setCategorie(response.data)
        })
    }, [])

    return (
        <>
            <label htmlFor="categorie"></label>
            <select value={value} onChange={(e) => changeValue('category',e.target.value)}>
                {categorie.map((cat) => {
                    return <option key={`cat-${cat.id}`} value={cat.id}>{cat.nom}</option>
                })}
            </select>
        </>
    )
}

export default CategorieList;