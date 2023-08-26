import React from 'react'
import NavigationBar from '../components/navbar'
import HeroSection from '../components/herosection'
import DetailsSection from '../components/detailssection'

const LandingPage = () => {
  return (
    <section>
        <div className='bg-white'>
            <NavigationBar />
            <HeroSection/>
            <DetailsSection/>
        </div>
    </section>
  )
}

export default LandingPage