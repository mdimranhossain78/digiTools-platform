
import { FaShoppingCart } from 'react-icons/fa'
import './App.css'
import Navber from './component/navber/Navber'
import Hero from './component/hero-section/Hero'
import Analysis from './component/analysis/Analysis'
import MainSection from './component/main-section/MainSection'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

const dataPromise= fetch('/data.json')
.then(res=> res.json())
function App() {
//  console.log(allCardsData)
const [count, setCount]=useState(0)
 
  return (
    <>
      <Navber count={count}></Navber>
      <Hero></Hero>
      <Analysis></Analysis>
      <MainSection dataPromise = {dataPromise} setCount={setCount}></MainSection>
      
       <ToastContainer />

    </>
  )
}

export default App
