import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Favorites, Home, Navbar} from "./components"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favorites' element={<Favorites/>}/>
      </Routes>
    </div>
  )
}

export default App