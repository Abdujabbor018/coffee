import React from 'react'
import axios from 'axios'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Cards/Cards'
import News from './Components/News/News'
import Facts from './Components/Facts/Facts'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <Cards />
    <News />
    <Facts />
    <Footer />
    </>
  )
}

export default App