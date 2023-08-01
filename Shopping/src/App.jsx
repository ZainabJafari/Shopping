import React from 'react'
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import Shop from './pages/shop'
import Cart from './pages/cart'
import Nav from './components/Nav'
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Shop />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App