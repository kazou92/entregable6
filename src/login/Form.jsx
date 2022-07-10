
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import  "./style/loginScreen.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [isError,setIsError]=  useState(false)
  const navigate = useNavigate()


const {handleSubmit,reset,register} = useForm()
const submit = data=>{
  const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/users/login`
  axios.post(URL,data)
  .then(res => {
    localStorage.setItem( "token", res.data.data.token)
    navigate("/")
  })
  .catch(err => {
    setIsError(true)
    setTimeout(()=>{
      setIsError(false)

    },5000)
  })
  reset({
    email:"",
    password:""
  })

}
  return (
    <form className='login_form' onSubmit={handleSubmit(submit)}>
        <ul className="login_test">
          <li >
            <b>Email :</b> mason@gmail.com
          </li>
          <li className="login_list_item">
            <b>Password:</b> mason1234
          </li>
        </ul>
        <h2 className='form_title'>Enter your information</h2>
        <ul className='login_list'>
          <li className="login_list_item">
            <label htmlFor="login_label" className="login_email">
              Email
            </label>
            <input type="email" className='login_input' 
            id='login_email'
            {...register("email")} />
          </li>


          <li className="login_list_item" >
            <label className='login_label' htmlFor="login_pass">
              Passwword
            </label>
            <input className='login_input' type="password" id='login_pass'
            {...register("password")}/>
          </li>
        </ul>
        <div>
        {
        isError && "invalid credentials,try again"
      }

        </div>
       

        <button>signing</button>
       
      </form>
  )
}

export default Form