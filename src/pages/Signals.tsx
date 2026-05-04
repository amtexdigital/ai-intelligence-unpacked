import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { categoryMeta, type SignalCategory, type SignalRow } from "@/lib/signals";
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

const filters: { value: SignalCategory | "all"; label: string }[] = [
  { value: "all", label: "ALL" },
  { value: "human_signal", label: "HUMAN" },
  { value: "nhi_signal", label: "NHI" },
  { value: "agi_signal", label: "AGI" },
  { value: "weird_signal", label: "WEIRD" },
  { value: "false_signal", label: "FALSE" },
];

const SignalsPage = () => {
  const [signals, setSignals] = useState<SignalRow[]>([]);
  const [active, setActive] = useState<SignalCategory | "all">("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Intelligence Signals — Detecting Intelligence";
  }, []);

  useEffect(() => {
    setLoading(true);
    let q = supabase
      .from("intelligence_signals")
      .select("*")
      .order("published_at", { ascending: false });
    if (active !== "all") q = q.eq("category", active);
    q.then(({ data }) => {
      setSignals((data as SignalRow[]) || []);
      setLoading(false);
    });
  }, [active]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteNav />
      <main className="flex-1 py-16 container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="font-display text-xl md:text-2xl mb-4">
            INTELLIGENCE <span className="neon-text-magenta">SIGNALS</span>
          </h1>
          <p className="text-muted-foreground font-body text-xl max-w-2xl mx-auto">
            Daily transmissions on humans, machines, and whatever else is out there.
          </p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-3 py-2 font-display text-[9px] tracking-widest border-2 transition-all ${
                active === f.value
                  ? "border-secondary neon-text-cyan"
                  : "border-border text-muted-foreground hover:border-secondary/60"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-36 bg-card/50 border-2 border-border animate-pulse" />
            ))}
          </div>
        ) : signals.length === 0 ? (
          <p className="text-center text-muted-foreground font-body text-xl">
            No signals in this band yet.
          </p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {signals.map((s, i) => {
              const meta = categoryMeta[s.category];
              return (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className={`p-5 bg-card/70 border-2 border-border ${meta.hoverShadow} transition-all`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-display text-[8px] tracking-widest px-2 py-1 ${meta.badgeClass}`}>
                      {meta.label}
                    </span>
                    <time className="text-muted-foreground font-mono text-sm">
                      {new Date(s.published_at).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <h3 className="font-display text-[11px] tracking-wider leading-relaxed mb-2">{s.title}</h3>
                  <p className="text-muted-foreground font-body text-lg">{s.summary}</p>
                  {s.source_url && (
                    <a
                      href={s.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 font-mono text-sm text-secondary hover:underline"
                    >
                      {s.source_name || "Source"} <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </motion.article>
              );
            })}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SignalsPage;
