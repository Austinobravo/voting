import React from 'react'
import Hero from './_components/Hero'
import Goals from './_components/Goals'
import Events from './_components/Events'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <main>
        <Hero/>
        <Goals/>
        <Events/>
        <Footer/>

    </main>
  )
}

export default Home