import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  { useContext } from 'react'
// import { shopContext } from '../context/shopContext'

// const {cartItems} = useContext(shopContext)

function Nav() {
    return (
        <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
                <div className="container">
                    <a className='navbar-brand'>Shopping.se</a>
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className='nav-link' to={'/'}>Shop</Link>
                        </li>
                        <li className="nav-item"><Link className='nav-link' to={'/cart'}><FontAwesomeIcon icon={faShoppingCart} /></Link>
                        {/* <span>{cartItems.map((p) => {<p>{p.count}</p>}) }</span> */}
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav