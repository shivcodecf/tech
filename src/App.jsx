import { useState } from 'react'

import './App.css' 
import Header from './components/header/Header' 
import Hero from './components/Hero/Hero' 
import Content from './components/content/Content' 
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/> 
     <Hero/> 
     <Content/> 
     <Footer/>
        
    </>
  )
}

export default App
