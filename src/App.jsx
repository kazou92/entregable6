import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import HomeCreem from './components/Home/style/HomeCreem'
import LoginScreem from './login/LoginScreem'
import ProtectedRoute from './components/ProtectedRoute'
import Cart from './components/Cart/Cart'
import Purchase from './components/purchases/Purchase'
import HeaderScreem from './components/content/HeaderScreem'
import ProductScreem from './products/ProductScreem'
import {useDispatch} from "react-redux"
import { useEffect } from 'react'
import {getAllProduct} from "./slice/products.slice"


function App() {
  const [count, setCount] = useState(0)

 const dispatch =useDispatch()

 useEffect(()=>{
  dispatch(getAllProduct())
 },[])

  return (
    <div className="App">
      <HeaderScreem/>
      <Routes>
        <Route path='/' element = {<HomeCreem/>} />
        <Route path='/login' element = {<LoginScreem/>} />

        <Route  element={<ProtectedRoute />}>
          <Route path='/cart' element ={<Cart/>}/>
          <Route path='/purchase' element ={<Purchase/>}/>
          <Route path='/products/:id' element={<ProductScreem/> }/>

        </Route>


      </Routes>
    </div>
  )
}

export default App
