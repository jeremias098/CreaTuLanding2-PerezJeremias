import { createContext, useEffect, useState } from 'react'

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) ||  [] ;

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(carritoInicial);

    const handelAgregar = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };
        const nuevoCarrito = [...carrito];
        const estaEnCarrito = carrito.find((juego) => juego.id === itemAgregado.id)



        if (estaEnCarrito) {
            estaEnCarrito.cantidad = estaEnCarrito.cantidad + cantidad;

        } else {
            nuevoCarrito.push(itemAgregado);
        }

        setCarrito(nuevoCarrito);
      
    }

    const cantidadCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);

    }

    useEffect(()=>{
        localStorage.setItem("carrito", JSON.stringify(carrito))
    },[carrito])

    return (
        <CartContext.Provider value={{
            carrito,
            handelAgregar,
            cantidadCarrito,
            precioTotal,
            vaciarCarrito
        }}>

            {children}

        </CartContext.Provider>
    )

}