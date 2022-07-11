import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import getConfig from "../../utils/getConfigs"

const ProductCard = ({ produc }) => {
    const navigate = useNavigate()
    
    const addProductToCart = ()=>{
        const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/cart`


        const OBJ ={
            id:produc.id,
            quantity:3
        }

        axios.post(URL,OBJ,getConfig())
        .then(res => console.log(res.data))
        .catch(err => console.log(err.data))
    }

    const goToProId = () => navigate(`/products/${produc.id}`)
    console.log(produc)


    return (
        <article onClick={goToProId} className='card_product'>
            <header className='card_product_header'>
                <img className='card_product_img' src={produc.productImgs[0]} alt="" />
            </header>
            <div className='card_product_body'>
                <h2 className='card_product_title'>{produc.title}</h2>
                <div className='card_product_price_contener'>
                    <h3 className='card_product_price_labal'>Price</h3>
                    <p className='card_product_price_number'>{produc.price}</p>
                </div>
                <button onClick={addProductToCart} className='card_product_btn'>
                <i className="fa-regular fa-cart-circle-xmark"></i>
                </button>
            </div>

        </article>
    )
}

export default ProductCard