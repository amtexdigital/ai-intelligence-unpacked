import { motion } from "framer-motion";
import { Brain, SearchCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-circuit">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <SearchCheck className="w-10 h-10 md:w-14 md:h-14 text-primary" />
          <Brain className="w-10 h-10 md:w-14 md:h-14 text-secondary" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-secondary tracking-[0.3em] text-sm md:text-base mb-4 text-glow-red"
        >
          THE CLOCK IS TICKING.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-6"
        >
          <span className="text-foreground">DETECTING</span>
          <br />
          <span className="text-primary text-glow-cyan">INTELLIGENCE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Your daily AI intelligence briefing. Newsletter & podcast drop at{" "}
          <span className="text-secondary font-semibold">11PM EST</span>, then
          Frank & Ronnie go live to debate the stories at{" "}
          <span className="text-primary font-semibold">9AM EST</span> — every weekday.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#newsletter"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:brightness-110 transition-all"
          >
            GET THE NEWSLETTER
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary/40 text-primary font-display text-sm font-semibold tracking-wider hover:bg-primary/10 transition-all"
          >
            HOW IT WORKS
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
