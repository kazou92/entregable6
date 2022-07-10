import { createSlice } from "@reduxjs/toolkit";

export const mySliceLoading = createSlice({
    name :"isLoading",
    initialState:false,
    reducers:{
        setLoadingGlobal:(state,action)=>action.payload
    }

})

export const {setLoadingGlobal}= mySliceLoading.actions

export default mySliceLoading.reducer