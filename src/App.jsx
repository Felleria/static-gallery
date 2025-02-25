import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NewsletterSignup from "./components/NewsletterSignup";
import CollectionPreview from "./components/CollectionPreview";
import ProductPage from "./components/ProductPage";
import ProductsList from './components/ProductsList';
import DevBanner from "./components/DevBanner"; // <– Import the custom banner

const HomePage = () => (
  <>
    <HeroSection />
    <CollectionPreview />
    <NewsletterSignup />
  </>
);

const App = () => {
  return (
    <Router>
      <div>
        <DevBanner /> {/* Add the banner here */}
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;