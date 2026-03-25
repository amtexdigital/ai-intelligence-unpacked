import { motion } from "framer-motion";
import heroIcon from "@/assets/hero-icon.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-circuit">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      {/* Circuit wire decorations - left side */}
      <svg className="absolute left-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[400px] opacity-30" viewBox="0 0 300 400" fill="none">
        <path d="M0 80 H120 L160 120 H200" stroke="hsl(var(--secondary))" strokeWidth="2" />
        <circle cx="200" cy="120" r="4" fill="hsl(var(--secondary))" />
        <path d="M0 140 H80 L120 180 H180" stroke="hsl(var(--secondary))" strokeWidth="2" />
        <circle cx="180" cy="180" r="4" fill="hsl(var(--secondary))" />
        <path d="M0 200 H100 L140 240 H220" stroke="hsl(var(--secondary))" strokeWidth="2" />
        <circle cx="220" cy="240" r="4" fill="hsl(var(--secondary))" />
        <path d="M0 260 H60 L100 300 H160" stroke="hsl(var(--secondary))" strokeWidth="2" />
        <circle cx="160" cy="300" r="4" fill="hsl(var(--secondary))" />
        <path d="M0 320 H90 L130 350 H200" stroke="hsl(var(--secondary))" strokeWidth="2" />
        <circle cx="200" cy="350" r="4" fill="hsl(var(--secondary))" />
      </svg>

      {/* Circuit wire decorations - right side */}
      <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[400px] opacity-30" viewBox="0 0 300 400" fill="none">
        <path d="M300 80 H180 L140 120 H100" stroke="hsl(var(--primary))" strokeWidth="2" />
        <circle cx="100" cy="120" r="4" fill="hsl(var(--primary))" />
        <path d="M300 140 H220 L180 180 H120" stroke="hsl(var(--primary))" strokeWidth="2" />
        <circle cx="120" cy="180" r="4" fill="hsl(var(--primary))" />
        <path d="M300 200 H200 L160 240 H80" stroke="hsl(var(--primary))" strokeWidth="2" />
        <circle cx="80" cy="240" r="4" fill="hsl(var(--primary))" />
        <path d="M300 260 H240 L200 300 H140" stroke="hsl(var(--primary))" strokeWidth="2" />
        <circle cx="140" cy="300" r="4" fill="hsl(var(--primary))" />
        <path d="M300 320 H210 L170 350 H100" stroke="hsl(var(--primary))" strokeWidth="2" />
        <circle cx="100" cy="350" r="4" fill="hsl(var(--primary))" />
      </svg>

      <div className="relative z-10 container mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center mb-8"
        >
          <img
            src={showIcon}
            alt="Detecting Intelligence - Brain inside magnifying glass"
            className="w-32 h-32 md:w-48 md:h-48 rounded-2xl shadow-2xl shadow-primary/20"
          />
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
          <span className="text-secondary font-semibold whitespace-nowrap">11PM EST</span>, then
          Frank & Ronnie go live to debate the stories at{" "}
          <span className="text-primary font-semibold whitespace-nowrap">9AM EST</span> — every weekday.
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
