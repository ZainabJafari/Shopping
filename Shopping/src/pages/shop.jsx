import Product from '../components/product'
import {ProductsList} from '../Data/Products'

function shop() {


  return (
    <>
    <div className='row'>{
      ProductsList.map((productData) =>{
       return <Product key={productData.id} productData={productData}/>
      })
    }
    </div>
    </>
  )
}

export default shop
