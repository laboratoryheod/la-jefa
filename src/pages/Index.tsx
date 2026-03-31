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

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <Hero />
    <Prizes />
    <Pricing />
    <HowToParticipate />
    <TrustAlert />
    <Winners />
    <FinalCTA />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
