import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import InteractiveDemo from "@/components/InteractiveDemo";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Features />
      <InteractiveDemo />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
