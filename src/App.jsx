import React from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import ProblemSolution from './sections/ProblemSolution'
import Properties from './sections/Properties'
import Testimonials from './sections/Testimonials'
import Dashboard from './sections/Dashboard'
import Services from './sections/Services'
import Footer from './components/Footer'
import Contact from './sections/Contact'
import Pricing from './sections/Pricing'
const App = () => {
  return (
    <>
   
      <Navbar />
      <Hero />
      <About />
      <ProblemSolution />
      <Properties />
      <Services />
      <Dashboard />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
   
    </>
  )
}

export default App