import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirItenPorId } from "../../helpers/pedirDatos";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    pedirItenPorId(Number(id))
      .then((res) => {
        setItem(res);
      });
  }, [id]);

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
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;