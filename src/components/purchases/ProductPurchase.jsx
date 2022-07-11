import React from 'react'

const ProductPurchase = (product) => {
    console.log(product)
  return (
    <section>
        <h4>{product.product.title}</h4>
        <p>{product.product.productsInCart.quantity}</p>
       
        <p>{product.product.price}</p>
    </section>
  )
}

export default ProductPurchase