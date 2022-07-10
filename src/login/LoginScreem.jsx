import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import  "./style/loginScreen.css"
import axios from "axios"
import Form from './Form'
import UserLoggeg from './style/UserLoggeg'

const LoginScreem = () => {
  const [token,setToken]=useState("")

  const changedToken =localStorage.getItem("token")
  useEffect(()=>{
    setToken(changedToken)
  },[changedToken])

  return (
    <div className='login'>
      {token?
      <UserLoggeg/>
      :
      <Form/>
      }
    </div>
  )
}

export default LoginScreem