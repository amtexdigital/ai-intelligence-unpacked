import { motion } from "framer-motion";
import { Radio } from "lucide-react";
import poster from "@/assets/coming-soon-poster.jpeg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center px-4 py-10">
      {/* Neon corner brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-secondary shadow-[0_0_12px_hsl(var(--secondary)/0.6)] z-10" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)] z-10" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-primary shadow-[0_0_12px_hsl(var(--primary)/0.6)] z-10" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-secondary shadow-[0_0_12px_hsl(var(--secondary)/0.6)] z-10" />

      <div className="relative z-10 w-full max-w-2xl text-center">
        {/* Coming soon eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          data-text="// COMING SOON"
          className="glitch font-display text-[10px] sm:text-xs tracking-[0.4em] mb-6 inline-block"
        >
          // COMING SOON
        </motion.p>

        {/* Pixel art poster — exact reference */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={poster}
            alt="Detecting Intelligence — pixel-art poster of both hosts in a neon cyberpunk city"
            className="w-full max-w-md mx-auto h-auto block neon-shadow-magenta"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="font-body text-foreground/90 text-lg sm:text-xl max-w-xl mx-auto mb-6 italic leading-relaxed"
        >
          Human intelligence.{" "}
          <span className="neon-text-cyan not-italic">Non-human intelligence.</span>{" "}
          <span className="neon-text-magenta not-italic">Artificial general intelligence.</span>
        </motion.p>

        {/* Live info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="font-mono text-sm sm:text-base mb-8"
        >
          <p className="neon-text-cyan tracking-widest">LIVE EVERY FRIDAY · 9AM ET</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.45 }}
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
        </motion.div>
      </div>
    </main>
  );
};

export default Index;
