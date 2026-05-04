import { useEffect } from "react";
import { motion } from "framer-motion";
import { Brain, Eye, Cpu } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "human",
    icon: <Brain className="w-8 h-8" />,
    title: "HUMAN INTELLIGENCE",
    accent: "neon-text-magenta",
    border: "border-primary/50",
    body: [
      "Attention spans are collapsing. Reading scores are flat. Independent reasoning feels harder to find.",
      "We track the data on cognition, focus, memory, and what years of algorithmic feeds are doing to the way we think.",
    ],
    bullets: [
      "Attention & focus research",
      "Reasoning and memory benchmarks",
      "Education, literacy, and learning trends",
      "How tools shape (or shrink) thought",
    ],
  },
  {
    id: "nhi",
    icon: <Eye className="w-8 h-8" />,
    title: "NON-HUMAN INTELLIGENCE",
    accent: "neon-text-cyan",
    border: "border-secondary/50",
    body: [
      "UAPs went mainstream. Whistleblowers went on the record. Animal cognition keeps surprising us.",
      "We follow the credible signals and the frameworks people are building to detect intelligence that isn't human and isn't ours.",
    ],
    bullets: [
      "UAP / UFO disclosure & policy",
      "Whistleblower testimony and AARO updates",
      "Animal cognition (cetaceans, cephalopods, corvids)",
      "SETI, technosignatures, and detection frameworks",
    ],
  },
  {
    id: "agi",
    icon: <Cpu className="w-8 h-8" />,
    title: "AGI 2027",
    accent: "text-accent",
    border: "border-accent/50",
    body: [
      "The AI-2027 timeline is the lens. We track every model release, agent leap, and alignment paper against it.",
      "Where are we on the curve, what changes next quarter, and what changes everything by 2027?",
    ],
    bullets: [
      "Frontier model capability jumps",
      "Agents, tool-use, and autonomy",
      "Alignment, safety & governance",
      "Economic & labor impact",
    ],
  },
];

const FrontiersPage = () => {
  useEffect(() => {
    document.title = "The Three Frontiers — Detecting Intelligence";
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.slice(1));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1 py-16 container mx-auto px-6 max-w-4xl">
        <header className="text-center mb-16">
          <h1 className="font-display text-xl md:text-2xl mb-4">
            THE THREE <span className="neon-text-cyan">FRONTIERS</span>
          </h1>
          <p className="text-muted-foreground font-body text-xl max-w-2xl mx-auto">
            Three intelligences emerging at once. We map all three, every week.
          </p>
        </header>

        <div className="space-y-16">
          {sections.map((s, i) => (
            <motion.section
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`scroll-mt-24 p-8 border-2 ${s.border} bg-card/50`}
            >
              <div className={`${s.accent} mb-4`}>{s.icon}</div>
              <h2 className={`font-display text-sm md:text-base tracking-wider mb-4 ${s.accent}`}>
                {s.title}
              </h2>
              {s.body.map((p, j) => (
                <p key={j} className="text-foreground/85 font-body text-xl leading-relaxed mb-3">
                  {p}
                </p>
              ))}
              <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                {s.bullets.map((b) => (
                  <li key={b} className="font-mono text-base text-muted-foreground flex gap-2">
                    <span className={s.accent}>▸</span> {b}
                  </li>
                ))}
              </ul>
            </motion.section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FrontiersPage;
