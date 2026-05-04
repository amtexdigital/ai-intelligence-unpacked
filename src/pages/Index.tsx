import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import Premise from "@/components/Premise";
import ThreeFrontiers from "@/components/ThreeFrontiers";
import LatestEpisodes from "@/components/LatestEpisodes";
import SignalsPreview from "@/components/SignalsPreview";
import SubmitSignal from "@/components/SubmitSignal";
import Newsletter from "@/components/Newsletter";
import Platforms from "@/components/Platforms";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <Hero />
      <Premise />
      <ThreeFrontiers />
      <LatestEpisodes />
      <SignalsPreview />
      <SubmitSignal />
      <Newsletter />
      <Platforms />
      <Footer />
    </div>
  );
};

export default Index;
