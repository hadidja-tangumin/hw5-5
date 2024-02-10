import React from 'react'
import { Routes, Route } from 'react-router-dom'


import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import MarketPage from "./pages/MarketPage"
import Basket from "./pages/Basket"


const App = () => {
  return (
    <>
     <Navbar/> 
     <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<MarketPage/>} />
          <Route path='basket' element={<Basket/>} />
          <Route path='*' element={
            <div>
              <h4>404 Not found</h4>
            </div>
          } />
        </Route>
     </Routes>
    </>
  )
}

export default App