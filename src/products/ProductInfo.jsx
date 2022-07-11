import React from 'react'
import { useState } from 'react'
import getConfigs from '../utils/getConfigs'
import "./style/productinfo.css"
import axios from "axios"

const ProductInfo = ({ products }) => {
  const [count,setCount]= useState(1)
  const minusOne =()=>{
    const minus = count -1
    if(minus >=1){
        setCount(minus)
    }
  }

  const plusOne = () =>setCount(count + 1)


const addCartProduct = ()=>{
    const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/cart`

    const object ={
        id:products.id,
        quantity:count
    }
    axios.post(URL,object,getConfigs())
        .then(res => console.log(res.data))
        .catch(err => console.log(err.data))
}

    return (
        <article className='product_info'>
            <h2 className='product_info_title'>{products?.title}</h2>
            <p className='product_info_description'>{products?.description}</p>
            <div className='card_product_price_contener'>
                <h3 className='card_product_price_labal'>Price</h3>
                <p className='card_product_price_number'>{products?.price}</p>
            </div>

            <div className='product_info_quantity_container'>
                <div onClick={minusOne} className="minusOne">-</div>
                <div onClick={count}>{count}</div>
                <div onClick={plusOne} className="plusOne">+</div>
                <button onClick={addCartProduct}>
                    
                <i className="fa-regular fa-cart-circle-xmark">Add to Cart</i>
                </button>

            </div>
        </article>
    )
}

export default ProductInfo