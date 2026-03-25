import Hero from "@/components/Hero";
import WhatWeCover from "@/components/WhatWeCover";
import Platforms from "@/components/Platforms";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <WhatWeCover />
      <Platforms />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
