import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import './App.css'

function App() {

  return (
    <>
    <Navbar id="nav_bar"></Navbar>
    <Home/>
    <About/>
    </>
  )
}

export default App
