import {useContext} from 'react'
import {shopContext} from '../context/shopContext'

function Product(productData) {

  const {img , prodictName , prise , id  } = productData.productData

  const {cartItems , addToCart , removeFromCart} = useContext(shopContext)
  const isCount = cartItems?.some((item) => item.id === id)

  return (
    <div className='col-3'>
      <img src={img} className='w-100' />
      <h5>{prodictName}</h5>
      <p>price : {prise}kr</p>   
      <button className='btn btn-info btn-sm' onClick={() => addToCart(id)}>+</button>
      <span className='mx-1'>{cartItems?.filter((row) => row.id === id)[0]?.count}</span>
      {isCount && (<button className='btn btn-info btn-sm' onClick={() => removeFromCart(id)}>-</button>)}
    </div>
  )
}

export default Product