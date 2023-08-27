import React from 'react'
import NavigationBar from '../components/navbar'
import HeroSection from '../components/section-hero/herosection'
import DetailsSection from '../components/section-details/detailssection'
import  PlansSection  from '../components/section-plans/planssection'
import TestimonialSection from '../components/section-testimonials/testimonals'
import PricingSection from '../components/section-pricing/pricingsection'
import ContactSection from '../components/section-contact/contactsection'
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