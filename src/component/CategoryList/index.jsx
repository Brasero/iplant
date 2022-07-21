import React from 'react';
import './index.css';


function CategoryList({categorys, filter, setFilter}){

    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    return (
        <>
            <select className="catSelect" value={filter} onChange={(e) => {handleChange(e)}}>
                    <option value=''>----</option>
                    {
                        categorys.map((cat) => {
                            return (
                                <option key={cat} value={cat}>{cat}</option>
                            )
                        })
                    }
            </select>
        </>
    )
}

export default CategoryList;