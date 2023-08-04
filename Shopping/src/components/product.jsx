import React from 'react'

function Product(productData) {
  console.log(productData.productData);


  return (
    <div className='col-3'>
      <img src={productData.productData.img} className='w-100' />
      <h5>{productData.productData.prodictName}</h5>
      <p>{productData.productData.prise}</p>   
      <button className='btn btn-info btn-sm'>+</button>
      <span className='mx-1'>0</span>
      <button className='btn btn-info btn-sm'>-</button>
    </div>
  )
}

export default Product