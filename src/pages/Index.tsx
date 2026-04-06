import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Prizes from "@/components/Prizes";
import Pricing from "@/components/Pricing";
import HowToParticipate from "@/components/HowToParticipate";
import TrustAlert from "@/components/TrustAlert";
import Winners from "@/components/Winners";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ParticipateForm from "@/components/ParticipateForm";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero onParticipateClick={() => setIsFormOpen(true)} />
      <Prizes />
      <Pricing />
      <HowToParticipate />
      <TrustAlert />
      <Winners />
      <FinalCTA onParticipateClick={() => setIsFormOpen(true)} />
      <Footer />
      <WhatsAppButton />
      <ParticipateForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};

export default Index;
