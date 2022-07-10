import React, { useEffect, useState } from 'react'
import axios from "axios"
import getConfigs from '../../utils/getConfigs'

const Purchase = () => {

  const [purchase,setPurchase]=useState()

  useEffect(()=>{
    const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
  
    axios.get(URL,getConfigs())
    .then(res => setPurchase(res.data.data.purchases))
    .catch(err => console.log(err))
  },[])

  console.log(purchase)
  return (
    <div>Purchase</div>
  )
}

export default Purchase