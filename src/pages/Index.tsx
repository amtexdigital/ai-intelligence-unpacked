import { motion } from "framer-motion";
import { Radio, Mail } from "lucide-react";
import heroImg from "@/assets/hero-detecting-intelligence.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-binary px-6 py-12">
        {/* Neon corner brackets */}
        <div className="absolute top-4 left-4 w-14 h-14 border-t-2 border-l-2 border-secondary shadow-[0_0_12px_hsl(var(--secondary)/0.6)]" />
        <div className="absolute top-4 right-4 w-14 h-14 border-t-2 border-r-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]" />
        <div className="absolute bottom-4 left-4 w-14 h-14 border-b-2 border-l-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)]" />
        <div className="absolute bottom-4 right-4 w-14 h-14 border-b-2 border-r-2 border-secondary shadow-[0_0_12px_hsl(var(--secondary)/0.6)]" />

        <div className="relative z-10 container mx-auto text-center max-w-3xl">
          {/* Pixel art hero — unchanged */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center mb-8"
          >
            <img
              src={heroImg}
              alt="Detecting Intelligence — pixel-art hosts in a neon cyberpunk city"
              width={1024}
              height={1024}
              className="max-w-[22rem] md:max-w-[30rem] w-full h-auto block mx-auto drop-shadow-[0_0_30px_hsl(var(--neon-purple)/0.6)]"
            />
          </motion.div>

          {/* Coming soon eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="font-display text-[10px] md:text-xs tracking-[0.3em] neon-text-cyan mb-5"
          >
            // COMING SOON
          </motion.p>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            data-text="DETECTING INTELLIGENCE"
            className="glitch font-display text-base sm:text-xl md:text-3xl tracking-widest mb-6 inline-block"
          >
            DETECTING INTELLIGENCE
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="font-body text-foreground/90 text-xl md:text-2xl max-w-2xl mx-auto mb-8 italic leading-relaxed"
          >
            Human intelligence.{" "}
            <span className="neon-text-cyan not-italic">Non-human intelligence.</span>{" "}
            <span className="neon-text-magenta not-italic">Artificial general intelligence.</span>
          </motion.p>

          {/* Live info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="font-mono text-base md:text-lg text-foreground/80 mb-10 space-y-1"
          >
            <p className="neon-text-cyan tracking-widest">LIVE EVERY FRIDAY · 9AM ET</p>
            <p className="text-accent tracking-wider">SITE LAUNCHING SOON</p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
          >
            <a
              href="https://youtube.com/@detectingintelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-display text-[10px] md:text-xs tracking-wider neon-shadow-magenta hover:translate-y-[-2px] transition-all"
            >
              <Radio className="w-4 h-4" />
              WATCH LIVE FRIDAYS
            </a>
            <a
              href="https://youtube.com/@detectingintelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-transparent text-secondary font-display text-[10px] md:text-xs tracking-wider neon-shadow-cyan hover:translate-y-[-2px] transition-all"
            >
              <Mail className="w-4 h-4" />
              SUBSCRIBE ON YOUTUBE
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
