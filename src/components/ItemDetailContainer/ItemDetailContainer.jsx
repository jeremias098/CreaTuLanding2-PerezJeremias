import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import "./ItemDetailContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { db } from "../../firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "juegos", id);

    getDoc(docRef)

      .then((res)=>{
        setItem(
          {...res.data(), id: res.id}
        )
      })
  }, [id]);

  const {carrito , handelAgregar} = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1)
 
  const handelRestar = () => {
 
     cantidad > 1 && setCantidad(cantidad - 1)
 }
 
 const handelSumar = () =>{
     cantidad < item.stock && setCantidad(cantidad + 1)
 }

 

  return (
    <div className='container'>
      {item && (
        <div className="producto-detalle">
          <img src={item.imagen} alt={item.titulo} />
          <div className="leyenda">
            <h3 className='titulo'>{item.titulo}</h3>
            <p className='descripcion'>{item.descripcion}</p>
            <p className='categoria'>Categoria: {item.categoria}</p>
            <p className='precio'>Precio: ${item.precio}</p>
            <ItemCount 
            handelAgregar={()=>{handelAgregar(item,cantidad)}} 
            cantidad={cantidad} 
            handelSumar={handelSumar} 
            handelRestar={handelRestar}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;