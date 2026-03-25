import { motion } from "framer-motion";
import podcastCover from "@/assets/podcast-cover.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-circuit">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 py-20">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
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
            className="font-body text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
          >
            Your daily briefing on the AI stories that matter. We track the top headlines and score how close we're getting to AGI — every weekday at <span className="text-primary font-semibold">9AM EST</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-secondary text-secondary-foreground font-display text-sm font-semibold tracking-wider hover:brightness-110 transition-all border-glow-cyan"
              style={{ boxShadow: '0 0 15px hsl(0, 85%, 55%, 0.3)' }}
            >
              <YoutubeIcon />
              WATCH LIVE
            </a>
            <a
              href="#newsletter"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-primary/40 text-primary font-display text-sm font-semibold tracking-wider hover:bg-primary/10 transition-all"
            >
              GET THE NEWSLETTER
            </a>
          </motion.div>
        </div>

        {/* Right - podcast cover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex-shrink-0"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/40 via-transparent to-secondary/40 blur-sm" />
            <img
              src={podcastCover}
              alt="Detecting Intelligence - Daily AI Show"
              className="relative w-72 md:w-96 rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const YoutubeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export default Hero;
