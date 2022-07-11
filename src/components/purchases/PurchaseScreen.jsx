import React, { useEffect, useState } from 'react'
import axios from "axios"
import getConfigs from '../../utils/getConfigs'
import PurchaseCard from './PurchaseCard'

const PurchaseScreen = () => {

  const [purchase,setPurchase]=useState()

  useEffect(()=>{
    const URL=`https://ecommerce-api-react.herokuapp.com/api/v1/purchases`
  
    axios.get(URL,getConfigs())
    .then(res => setPurchase(res.data.data.purchases))
    .catch(err => console.log(err))
  },[])

  console.log(purchase)
  return (
    <div className='purchase'>
      <h2 className='purchase_title'>purchase</h2>
      <div className='purchase_container'>
        {
          purchase?.map(purchas =>(
            <PurchaseCard
            key={purchas.id}
            purchas={purchas}/>
          ))
        }
      </div>

    </div>
  )
}

export default PurchaseScreen