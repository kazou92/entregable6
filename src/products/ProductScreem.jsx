import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductInfo from './ProductInfo'
import SimularProduct from './SimularProduct'
import "./style/productScreen.css"
const classImg=["","second_img","third_img"]


const ProductScreem = () => {

   const[indice,setIndice]= useState(0)

   const[products,setProducts]= useState()

    const {id}=useParams()

    useEffect(()=>{
        const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products/${id}`
        axios.get(URL)
        .then(res=>setProducts(res.data.data.product))
        .catch(err => console.log(err))
    },[])
    console.log(products)



    const clickPrev = ()=>{
        const prevClass = indice - 1
        if(prevClass < 0){
            setIndice(classImg.length-1)
        }else{
            setIndice(prevClass)
        }
    }



    const clickNext = ()=>{
        const nextClass = indice + 1
        if(nextClass >= classImg.length){
            setIndice(0)
        }else{
            setIndice(nextClass)
        }
    }
 
  return (
    <div className='product' >
        <div className="slider">
            <div onClick={clickPrev} className='slider_prev'>&#60;</div>
            <div className={`slider_container ${classImg[indice]}`}>
                {
                    products?.productImgs.map(imgSrc =>(
                        <img
                         key={imgSrc} 
                        src={imgSrc} 
                        alt=""
                        className='slider_img'
                         />
                    ) )
                }

            </div>
            <div onClick={clickNext} className='slider_next'>&#62;</div>
        </div>
        <div className="point_container">
            <div onClick={()=>setIndice(0)} className={ indice === 0 ? "three_dots three_dots_active" :"three_dots"}></div>


            <div onClick={()=>setIndice(1)} className={ indice === 1 ? "three_dots three_dots_active" :"three_dots"}></div>


            <div onClick={()=>setIndice(2)} className={ indice === 2 ? "three_dots three_dots_active" :"three_dots"}></div>
        </div>
        <ProductInfo products={products}/>
        <SimularProduct products={products}/>

    </div>
  )
}

export default ProductScreem