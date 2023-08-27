import React from 'react'
import NavigationBar from '../components/navbar'
import HeroSection from '../components/herosection'
import DetailsSection from '../components/detailssection'
import { PlansSection } from '../components/planssection'
import TestimonialSection from '../components/testimonals'
import PricingSection from '../components/pricingsection'
import ContactSection from '../components/contactsection'
import Footer from '../components/footer'

const LandingPage = () => {
  return (
    <section>
        <div className='bg-white'>
            <NavigationBar />
            <HeroSection/>
            <DetailsSection/>
            <PlansSection/>
            <TestimonialSection/>
            <PricingSection/>
            <ContactSection/>
            <Footer/>
        </div>
    </section>
  )
}

export default LandingPage