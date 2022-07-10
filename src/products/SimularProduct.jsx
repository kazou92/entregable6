import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/Home/ProductCard'

const SimularProduct = ({ products }) => {

    const [filterProduct, setFilterProduct] = useState()

    const allProducts = useSelector(state => state.products)

    console.log(allProducts)

    useEffect(() => {
        if (allProducts.length !== 0) {
        const filter = allProducts?.filter(e =>e.category.name === products.category)
        setFilterProduct(filter)

        }

    }, [products])

    console.log(filterProduct)



    return (
       <article className='similar_product'>
        <h2 className='simular_product_title'>discover simular item</h2>
        <div className="product_contenair">
       {
        filterProduct?.map(e =>{
            if(e.title !== products.title){
       return (  <ProductCard
          key={e.id}
          produc={e}/>)
       }
        })
       }
      </div>

       </article>
    )
}

export default SimularProduct