import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./style/card.css"

const CardScreen = () => {
  const[card,setCard]= useState()

  useEffect(()=>{
    const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/cart`
    axios.post(URL)
    .then(res => console.log(res.data))
    .catch(err =>console.log(err))
  },[])

  return (
    <div>CardScreen</div>
  )
}

export default CardScreen