import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { categoryMeta, type SignalRow } from "@/lib/signals";

const SignalsPreview = () => {
  const [signals, setSignals] = useState<SignalRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("intelligence_signals")
      .select("*")
      .order("published_at", { ascending: false })
      .limit(4)
      .then(({ data }) => {
        setSignals((data as SignalRow[]) || []);
        setLoading(false);
      });
  }, []);

  return (
    <section id="signals" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            INTELLIGENCE <span className="neon-text-magenta">SIGNALS</span>
          </h2>
          <p className="text-muted-foreground text-xl font-body max-w-2xl mx-auto">
            Live transmissions between episodes. Verified, debated, or flagged false.
          </p>
        </motion.div>

        {loading ? (
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-36 bg-card/50 border-2 border-border animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {signals.map((s, i) => {
              const meta = categoryMeta[s.category];
              return (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`p-5 bg-card/70 backdrop-blur-sm border-2 border-border ${meta.hoverShadow} transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-display text-[8px] tracking-widest px-2 py-1 ${meta.badgeClass}`}>
                      {meta.label}
                    </span>
                    <time className="text-muted-foreground font-mono text-sm">
                      {new Date(s.published_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </time>
                  </div>
                  <h3 className="font-display text-[11px] tracking-wider leading-relaxed mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-lg leading-snug">{s.summary}</p>
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

        <div className="text-center mt-10">
          <Link
            to="/signals"
            className="inline-flex items-center gap-2 font-display text-[10px] tracking-wider text-secondary hover:underline"
          >
            VIEW ALL SIGNALS →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignalsPreview;
