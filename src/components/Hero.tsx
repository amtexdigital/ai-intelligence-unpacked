import { motion } from "framer-motion";
import heroIcon from "@/assets/hero-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pixel-grid">
      {/* Pixel decoration corners */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-4 border-l-4 border-accent opacity-40" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-4 border-r-4 border-accent opacity-40" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-4 border-l-4 border-accent opacity-40" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-4 border-r-4 border-accent opacity-40" />

      {/* Pixel decorations - left side */}
      <div className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-1 bg-primary" style={{ width: `${60 + i * 20}px` }} />
            <div className="w-3 h-3 bg-primary" />
          </div>
        ))}
      </div>

      {/* Pixel decorations - right side */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 bg-secondary" />
            <div className="h-1 bg-secondary" style={{ width: `${60 + i * 20}px` }} />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center mb-10"
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
          className="font-body text-foreground text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed"
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
