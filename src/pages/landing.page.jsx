import React from 'react'
import NavigationBar from '../components/navbar'
import HeroSection from '../components/herosection'
import DetailsSection from '../components/detailssection'
import { PlansSection } from '../components/planssection'

const LandingPage = () => {
  return (
    <section>
        <div className='bg-white'>
            <NavigationBar />
            <HeroSection/>
            <DetailsSection/>
            <PlansSection/>
        </div>
    </section>
  )
}

export default LandingPage