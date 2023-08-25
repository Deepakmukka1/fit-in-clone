import React from 'react'
import NavigationBar from '../components/navbar'
import HeroSection from '../components/herosection'

const LandingPage = () => {
  return (
    <section>
        <div className='bg-background'>
            <NavigationBar />
            <HeroSection/>
        </div>
    </section>
  )
}

export default LandingPage