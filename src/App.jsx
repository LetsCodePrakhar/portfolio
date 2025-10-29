import React from 'react'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Services from './components/services/Services'
import Qualifications from './components/qualifications/Qualifications'
import Contact from './components/contact/Contact'
import Work from './components/work/Work'
import './App.css'

const App = () => {
  return (
   <>
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualifications />
        <Work/>
        <Contact />
      </main>
    </div>
   </>
  )
}

export default App 