import React from 'react';

//Rappel des consigne : 
//Styliser votre component Cart.jsx pour qu'il ai un padding de 32px, du texte blanc et un background-color #31b572


function Cart({cart}){

    return (
        <>
            <div style={{
                padding: '32px',
                color: 'white',
                backgroundColor: '#31b572',
            }}>
                <ul>
                    {cart.map((product, index) => {
                        return <li 
                        key={`${product.name}-${index}`}>{product.name} {product.price}€</li>
                    })}
                </ul>
                <div>
                    Total : {cart.reduce((acc, product) => 
                        acc+product.price
                        , 0

                    )}€
                </div>
            </div>
        </>
    )
}

export default Cart;