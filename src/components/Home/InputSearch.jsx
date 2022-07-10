import React from 'react'
import { useForm } from 'react-hook-form'

const InputSearch = () => {

   const {handleSubmit,reset,register}= useForm()
   const submit =data =>{

   }


  return (
   <form className='form_home' onSubmit={handleSubmit(submit)}>
    <input type="text"  {...register("searchText")}/>
    <button>search</button>
   </form>
  )
}

export default InputSearch