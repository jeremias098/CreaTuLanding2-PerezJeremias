import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Home from './components/Home/Home'
import Nosotros from './components/Nosotros/Nosotros'
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {


  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/juegos' element = {<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/nosotros' element ={<Nosotros/>}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
