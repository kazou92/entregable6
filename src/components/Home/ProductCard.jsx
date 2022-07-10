import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ produc }) => {
    const navigate = useNavigate()

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
                <button className='card_product_btn'>
                <i className="fa-regular fa-cart-circle-xmark"></i>
                </button>
            </div>

        </article>
    )
}

export default ProductCard