import React from 'react'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Projects from './pages/Projects'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <Testimonials/>
      <Contact/>
    </div>
  )
}

export default App