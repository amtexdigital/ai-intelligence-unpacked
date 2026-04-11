import { motion } from "framer-motion";
import heroIcon from "@/assets/hero-icon.png";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-pixel-grid">
      {/* Pixel decoration corners */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-accent opacity-40" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-accent opacity-40" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-accent opacity-40" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-accent opacity-40" />


      <div className="relative z-10 container mx-auto px-6 text-center py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center mb-4"
        >
          <img
            src={heroIcon}
            alt="Detecting Intelligence"
            className="w-[27.5rem] h-[27.5rem] md:w-[37.5rem] md:h-[37.5rem]"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="font-body text-foreground text-xl md:text-2xl max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Your daily AI intelligence briefing. Newsletter & podcast drop at{" "}
          <span className="text-primary font-semibold whitespace-nowrap">11PM EST</span>, then
          Frank & Ronnie go live to debate the stories at{" "}
          <span className="text-secondary font-semibold whitespace-nowrap">9AM EST</span> — every weekday.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#newsletter"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-[10px] md:text-xs tracking-wider pixel-shadow-pink hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            GET THE NEWSLETTER
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-4 border-accent text-accent font-display text-[10px] md:text-xs tracking-wider pixel-shadow hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
          >
            HOW IT WORKS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
