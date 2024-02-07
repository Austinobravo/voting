import React from 'react'
import Hero from './_components/Hero'
import Goals from './_components/Goals'
import Events from './_components/Events'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const Home = () => {
  return (
    <main>
        <Navbar/>
        <Hero/>
        <Goals/>
        <Events/>
        <Footer/>

    </main>
  )
}

export default Home