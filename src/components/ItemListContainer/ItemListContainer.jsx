import React, { useEffect, useState } from 'react';
import pedirDatos from '../../helpers/pedirDatos';
import { Link } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [juegos, setJuegos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [filtroCategoria, setFiltroCategoria] = useState('');

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setJuegos(res);
        const categoriasUnicas = Array.from(new Set(res.map(juego => juego.categoria)));
        setCategorias(categoriasUnicas);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
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