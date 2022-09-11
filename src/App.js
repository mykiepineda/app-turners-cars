import React from "react";
import "./App.css";
import BottomCTA from "./components/bottom-cta/BottomCTA";
import Extras from "./components/extras/Extras";
import FAQ from "./components/faq/FAQ";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import OurOptions from "./components/our-options/OurOptions";
import OurReputation from "./components/our-reputation/OurReputation";
import PricingComparison from "./components/pricing-comparison/PricingComparison";
import WhyTurners from "./components/why-turners/WhyTurners";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <WhyTurners />
      <OurOptions />
      <OurReputation />
      <PricingComparison />
      <Extras />
      <FAQ />
      <BottomCTA />
      <Footer />
    </React.Fragment>
  );
}

export default App;
