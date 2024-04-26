import React, { useState } from 'react'

const ItemCount = ({handelAgregar ,handelSumar, handelRestar, cantidad} ) => {
 
 

 
    return (
    <div>
        <div className="item-count">
            <button onClick={handelRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={handelSumar}>+</button>
        </div>

        <button className='agregar-carrito' onClick={handelAgregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount