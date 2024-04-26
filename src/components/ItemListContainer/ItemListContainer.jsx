import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';
const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('');

  useEffect(() => {
    const juegosRef = collection(db, "juegos");
  
    getDocs(juegosRef)
      .then((res) => {
        const juegosData = res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setJuegos(juegosData);
  
       
        const categoriasUnicas = Array.from(new Set(juegosData.map(juego => juego.categoria)));
        setCategorias(categoriasUnicas);
      })
      .catch((error) => {
        console.error("Error fetching documents: ", error);
      });
  }, []);

  const handleFiltrarCategoria = (categoria) => {
    setFiltroCategoria(categoria);
  };

  const handleMostrarTodos = () => {
    setFiltroCategoria('');
  };

  const juegosFiltrados = filtroCategoria
    ? juegos.filter(juego => juego.categoria === filtroCategoria)
    : juegos;

  return (
    <div className='contenedor-card-juego'>
      <h2 className='titulo-contenedor'>Juegos</h2>

      <div className="botonera-categorias">
        <button onClick={handleMostrarTodos}>Todos</button>
        {categorias.map((categoria, index) => (
          <button key={index} onClick={() => handleFiltrarCategoria(categoria)}>
            {categoria}
          </button>
        ))}
      </div>

      <div className="juegos">
        {juegosFiltrados.map((juego) => (
          <div className='juego' key={juego.id}>
            <img src={juego.imagen} alt={juego.titulo} />
            <div className='descr-juego'>
              <h4>{juego.titulo}</h4>
              <p>Precio: $ {juego.precio}</p>
              <p>Descripción: {juego.descripcion}</p>
              <button><Link to={`/item/${juego.id}`} className='ver-mas'>Ver más</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;



