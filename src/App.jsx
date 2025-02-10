import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import NewsletterSignup from './components/NewsletterSignup';
import CollectionPreview from './components/CollectionPreview';
import ProductPage from './components/ProductPage';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <HeroSection />
        <CollectionPreview />
        <NewsletterSignup />
        <Footer />
        
        {/* Define Routes for navigation */}
        <Routes>
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
