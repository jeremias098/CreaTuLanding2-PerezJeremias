import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

  return (
    <>
        <Link className='link_menu' to="/carrito">carrito
        <span className='numerito'> {cantidadCarrito()}</span>
        </Link>
  
    </>
  )
}

export default CartWidget