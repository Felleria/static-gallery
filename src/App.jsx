import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NewsletterSignup from './components/NewsletterSignup'
import CollectionPreview from './components/CollectionPreview'
HeroSection
import ProductList from './components/ProductList'

const App = () => {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <CollectionPreview/>
      <NewsletterSignup/>
      <Footer/>
      <ProductList/>
    </div>
  )
}

export default App