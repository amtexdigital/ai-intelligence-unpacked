import { motion } from "framer-motion";
import heroCyberpunk from "@/assets/hero-cyberpunk.png";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-binary">
      {/* Neon corner brackets */}
      <div className="absolute top-4 left-4 w-14 h-14 border-t-2 border-l-2 border-secondary shadow-[0_0_12px_hsl(var(--secondary)/0.6)]" />
      <div className="absolute top-4 right-4 w-14 h-14 border-t-2 border-r-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]" />
      <div className="absolute bottom-4 left-4 w-14 h-14 border-b-2 border-l-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]" />
      <div className="absolute bottom-4 right-4 w-14 h-14 border-b-2 border-r-2 border-secondary shadow-[0_0_12px_hsl(var(--secondary)/0.6)]" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-10 pb-12 md:pt-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center mb-6"
        >
          <img
            src={heroCyberpunk}
            alt="Detecting Intelligence — cyberpunk pixel brain with magnifying glass"
            className="max-w-[20rem] md:max-w-[28rem] w-full h-auto block mx-auto drop-shadow-[0_0_30px_hsl(var(--neon-purple)/0.6)]"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          data-text="DETECTING INTELLIGENCE"
          className="glitch font-display text-base sm:text-xl md:text-3xl tracking-widest mb-6 inline-block"
        >
          DETECTING INTELLIGENCE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="font-body text-foreground text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Your daily AI intelligence briefing. Newsletter & podcast drop at{" "}
          <span className="neon-text-magenta font-semibold whitespace-nowrap">11PM EST</span>, then
          Frank & Ronnie go live to debate the stories at{" "}
          <span className="neon-text-cyan font-semibold whitespace-nowrap">9AM EST</span> — every weekday.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <a
            href="#newsletter"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display text-[10px] md:text-xs tracking-wider neon-shadow-magenta hover:translate-y-[-2px] transition-all"
          >
            GET THE NEWSLETTER
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-secondary font-display text-[10px] md:text-xs tracking-wider neon-shadow-cyan hover:translate-y-[-2px] transition-all"
          >
            HOW IT WORKS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
