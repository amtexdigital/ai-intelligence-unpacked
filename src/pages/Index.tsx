import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeCover from "@/components/WhatWeCover";
import Platforms from "@/components/Platforms";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <WhatWeCover />
      <Platforms />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
