import React from 'react'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Shop from './pages/shop'
import Cart from './components/cart'
import Nav from './components/Nav'
import {ShopContextProvider} from './context/shopContext'

function App() {
  return (
    <div>
      <ShopContextProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App