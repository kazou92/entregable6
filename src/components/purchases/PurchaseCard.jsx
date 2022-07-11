import React from 'react'
import ProductPurchase from './ProductPurchase'

const PurchaseCard = ({purchas}) => {
  return (
    <article className='purchase'>
        <h2>{purchas.updatedAt}</h2>
        {
            purchas.cart.products.map(product =>(
                <ProductPurchase
                key={product.id}
                product={product}/>
            ))
        }
    </article>
  )
}

export default PurchaseCard