import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllProduct } from '../../../slice/products.slice'
import InputSearch from '../InputSearch'
import ProductCard from '../ProductCard'
import "../style/homeScrenn.css"

const HomeCreem = () => {
 const dispach = useDispatch()
const product = useSelector(state =>state.products)
console.log(product)


  useEffect(()=>{
    dispach(getAllProduct())

  },[])
  return (
    <div className='home'>
      <InputSearch/>
      <div className="product_contenair">
       {
        product.map(produc =>{
       return   <ProductCard
          key={produc.id}
          produc={produc}/>
        })
       }
      </div>

    </div>
  )
}

export default HomeCreem