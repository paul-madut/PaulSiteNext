import React from 'react'

import About from './components/layout/About'
import Contact from './components/layout/Contact'
import Footer from './components/layout/Footer'
import Hero from './components/layout/Hero'
import Navbar from './components/layout/Navbar'
import Portfolio from './components/layout/Portfolio'
import Resume from './components/layout/Resume'


function page() {
  return (
    <>

    <div className="hero h-screen w-full bg-black overflow-hidden">

      <nav>
        <Navbar/>
      </nav>
        <Hero/>

    </div>

    <div className="hero h-screen w-full bg-black">

    <About></About>

    </div>

    <div className="hero h-screen w-full bg-black">

    <Resume></Resume>

    </div>



    </>
  )
}

export default page