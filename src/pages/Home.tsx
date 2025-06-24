import React from 'react'
import Hero from '../components/Hero'
import ProductCategoryGrid from '../components/ProductCategoryGrid'
import AboutSection from '../components/AboutSection'
import ExportSection from '../components/ExportSection'
import Testimonials from '../components/Testimonials'
import ContactForm from '../components/ContactForm'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductCategoryGrid />
      <AboutSection />
      <ExportSection />
      <Testimonials />
      <ContactForm />
    </>
  )
}

export default Home