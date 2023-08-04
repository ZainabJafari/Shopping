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




    // const [products , setProducten] = useState('')
    // const getData = ()  =>{
    //     axiox.get('https://fakestoreapi.com/products').then((res) => {
    //         const getProduct = (res.data)
    //         setProducten(getProduct)

    //         console.log(getProduct.id);
    //         getProduct.map((product) => {
    //             return product.id
    //             // console.log(product.title);
                
    //         })
    //     })
    // }
    // getData()