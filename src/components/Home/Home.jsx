import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import pedirDatos from '../../helpers/pedirDatos';
import "./Home.css"

const Home = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setJuegos(res);
      })
      
  }, []);

  const juegosDestacados = juegos.filter(juego => juego.clase === "destacado");

  return (
    <div className='container'>
      <div className='flayer'>
        <h2>Compra tu <span>juego</span> favorito aquí</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequuntur porro iste aliquam esse labore voluptates quasi ipsa consequatur exercitationem, sequi soluta molestias natus fuga sit qui iure aut doloribus.</p>

        <button><Link to='/juegos'>Juegos</Link></button>
      </div>

      <div className="destacados">
        <h2>Juegos Destacados</h2>
        {juegosDestacados.map((juego) => (
          <div className='juego' key={juego.id}>
            <img src={juego.imagen} alt={juego.titulo} />
            <div className='descr-juego'>
              <h4>{juego.titulo}</h4>
              <button><Link to={`/item/${juego.id}`} className='ver-mas'>Ver más</Link></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;