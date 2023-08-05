import React, { useContext } from 'react'
import { shopContext } from '../context/shopContext'
import { ProductsList } from '../Data/Products'
import Product from './product'

function cart() {
  const {cartItems} = useContext(shopContext)

  return (
    <div>
      <div>{ProductsList.map((p) => {
          if(cartItems.some((i) => i.id === p.id && i.count > 0) )
            return <Product productData={p} key={p.id}/>
        })
      }</div>
    </div>
  )
}

export default cart