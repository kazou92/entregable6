import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import getConfigs from '../../utils/getConfigs'
import "./style/card.css"
import axios from "axios"

const CardScreen = () => {
  const[card,setCard]= useState()

 const postPurchase = () =>{
  const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
  const objPurchase ={
    "street": "psje san matias 14389",
    "colony": "Metropolitana",
    "zipCode": 67891,
    "city": "HAITI",
    "references": "somos sejousnat"
  }
  axios.post(URL,objPurchase,getConfigs())
  .then(res => console.log(res.data))
  .catch(err =>console.log(err.data))
 }

  return (
    <div>
      <button onClick={postPurchase}>
        <h2>post purchase</h2>
      </button>
    </div>
  )
}

export default CardScreen