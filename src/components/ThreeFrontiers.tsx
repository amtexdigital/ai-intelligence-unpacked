import { motion } from "framer-motion";
import { Brain, Eye, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const frontiers = [
  {
    icon: <Brain className="w-7 h-7" />,
    title: "HUMAN INTELLIGENCE",
    body: "Are we losing attention, reasoning, memory, and independent thought?",
    accent: "magenta" as const,
    to: "/frontiers#human",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "NON-HUMAN INTELLIGENCE",
    body: "UAPs, NHI, animal cognition, and alien detection frameworks.",
    accent: "cyan" as const,
    to: "/frontiers#nhi",
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "AGI 2027",
    body: "The road to AGI, agents, automation, alignment, and economic impact.",
    accent: "purple" as const,
    to: "/frontiers#agi",
  },
];

const accentMap = {
  magenta: {
    text: "neon-text-magenta",
    border: "hover:border-primary",
    shadow: "hover:shadow-[0_0_24px_hsl(var(--neon-magenta)/0.55)]",
  },
  cyan: {
    text: "neon-text-cyan",
    border: "hover:border-secondary",
    shadow: "hover:shadow-[0_0_24px_hsl(var(--neon-cyan)/0.55)]",
  },
  purple: {
    text: "text-accent",
    border: "hover:border-accent",
    shadow: "hover:shadow-[0_0_24px_hsl(var(--neon-purple)/0.55)]",
  },
};

const ThreeFrontiers = () => {
  return (
    <section id="frontiers" className="py-24 bg-card/30 relative border-y border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            THE THREE <span className="neon-text-cyan">FRONTIERS</span>
          </h2>
          <p className="text-muted-foreground text-xl font-body max-w-2xl mx-auto">
            Three intelligences. One investigation. Tracked every week.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {frontiers.map((f, i) => {
            const a = accentMap[f.accent];
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={f.to}
                  className={`block h-full p-7 bg-card/70 backdrop-blur-sm border-2 border-border ${a.border} ${a.shadow} transition-all duration-300`}
                >
                  <div className={`${a.text} mb-4`}>{f.icon}</div>
                  <h3 className="font-display text-[11px] font-semibold mb-3 tracking-wider">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-lg font-body leading-relaxed">
                    {f.body}
                  </p>
                  <span className={`mt-5 inline-block font-display text-[8px] tracking-widest ${a.text}`}>
                    EXPLORE →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreeFrontiers;
