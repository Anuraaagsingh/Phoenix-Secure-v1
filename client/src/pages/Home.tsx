import { useState, useEffect } from "react";
import LoaderCounter from "@/components/LoaderCounter";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import InstallationSteps from "@/components/InstallationSteps";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if user has already seen the loader
    const hasSeenLoader = sessionStorage.getItem("hasSeenLoader");
    if (hasSeenLoader) {
      setShowLoader(false);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("hasSeenLoader", "true");
    setShowLoader(false);
  };

  return (
    <>
      {showLoader && <LoaderCounter onComplete={handleLoaderComplete} duration={2500} />}
      
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <InstallationSteps />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
