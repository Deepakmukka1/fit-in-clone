import React from 'react'
import NavigationBar from '../components/navbar'
import HeroSection from '../components/herosection'
import DetailsSection from '../components/detailssection'
import { PlansSection } from '../components/planssection'
import TestimonialSection from '../components/testimonals'

const LandingPage = () => {
  return (
    <section>
        <div className='bg-white'>
            <NavigationBar />
            <HeroSection/>
            <DetailsSection/>
            <PlansSection/>
            <TestimonialSection/>
        </div>
    </section>
  )
}

export default LandingPage