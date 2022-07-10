import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setLoadingGlobal } from "./isLoading.slice";

export const myProductSlice = createSlice({
    name :"products",
    initialState:[],
    reducers:{

        setProductsGlobal :(state,action) => action.payload

    }
})
  export const {setProductsGlobal} =myProductSlice.actions

export  const getAllProduct = () => (dispatch) =>{
  dispatch(setLoadingGlobal(true))
    const URL =`https://ecommerce-api-react.herokuapp.com/api/v1/products`
   return axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err =>console.log(err))
    .finally( () =>dispatch(setLoadingGlobal(false)))
}

 export default myProductSlice.reducer;
  