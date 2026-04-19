import { motion } from "framer-motion";
import { Brain, Newspaper, TrendingUp, Clock } from "lucide-react";

const features = [
  {
    icon: <Newspaper className="w-6 h-6" />,
    title: "TOP AI NEWS",
    description: "Every major AI story, distilled into plain English so you actually understand what happened.",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AGI IQ SCORE",
    description: "Our proprietary daily score tracking AI's intelligence level on a 50–300 scale. Where are we today?",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "MODEL RANKINGS",
    description: "Live leaderboard of the top AI models with ELO ratings from Chatbot Arena.",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "AGI TIMELINE",
    description: "How close are we? We track progress against the AI-2027 timeline every single day.",
  },
];

const WhatWeCover = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            WHAT WE <span className="neon-text-cyan">COVER</span>
          </h2>
          <p className="text-muted-foreground text-xl font-body max-w-2xl mx-auto">
            Everything you need to stay ahead of the AI revolution — delivered nightly, debated every morning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 border-2 border-border bg-card/70 backdrop-blur-sm hover:border-secondary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--neon-cyan)/0.5)]"
            >
              <div className="neon-text-magenta mb-4">{feature.icon}</div>
              <h3 className="font-display text-[10px] font-semibold mb-3 tracking-wider">{feature.title}</h3>
              <p className="text-muted-foreground text-lg font-body leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeCover;
