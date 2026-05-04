import { useEffect } from "react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";
import SubmitSignal from "@/components/SubmitSignal";

const SubmitPage = () => {
  useEffect(() => {
    document.title = "Submit a Signal — Detecting Intelligence";
  }, []);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1">
        <SubmitSignal />
      </main>
      <Footer />
    </div>
  );
};

export default SubmitPage;
