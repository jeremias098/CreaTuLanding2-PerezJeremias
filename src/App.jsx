import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Home from './components/Home/Home'
import Nosotros from './components/Nosotros/Nosotros'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext'

import Carrito from './components/Carrito/Carrito'
import CheckOut from './components/CheckOut/CheckOut'

function App() {


  return (
    <>

      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/juegos' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/nosotros' element={<Nosotros />} />
            <Route path='/carrito' element={<Carrito />}></Route>
            <Route path='/checkout' element={<CheckOut/>}></Route>
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
