import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import './nav.css'


function Nav() {
    const {cartItems} = useContext(shopContext)
    const itemCount = cartItems.reduce((prev , current) =>{
        return prev + current.count
      },0)

    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <div className="container">
                    <a className='navbar-brand'>Shopping.se</a>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className='nav-link' to={'/'}>Shop</Link>
                        </li>
                        <li className="nav-item"><Link className='nav-link' to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} />{itemCount > 0 && <span className='cart-items-count'>{itemCount}</span>}</Link>
                        
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav