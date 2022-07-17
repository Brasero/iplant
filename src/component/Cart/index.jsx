import React, { useState } from 'react';
import './index.css';

//Rappel des consigne : 
//Styliser votre component Cart.jsx pour qu'il ai un padding de 32px, du texte blanc et un background-color #31b572


function Cart({cart}){

    const [isOpen, setIsOpen] = useState(false)
    const toggleCart = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <div className={isOpen ? 'cartContainer' : 'cartContainer cartContainerClosed'}>
            <button className="toggleCartButton" onClick={()=>toggleCart()}>
                    {
                        isOpen ?  'fermer' : 'ouvrir le panier'
                    }
                </button>
                <ul className="cart">
                    {isOpen && cart.map((product, index) => {
                        return <li 
                        key={`${product.name}-${index}`} className="cartElementContainer"><span className="elementName">{product.name}</span>  <span className="elementPrice">{product.price}€</span><span className="elementMulti"> x </span><span className="elementAmount">{product.amount}</span> </li>
                    })}
                </ul>
                <div>
                    {isOpen && 'Total : '+cart.reduce((acc, product) => 
                        acc+product.price * product.amount
                        , 0

                    )+'€'}
                </div>
            </div>
        </>
    )
}

export default Cart;