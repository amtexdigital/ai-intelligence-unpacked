import { motion } from "framer-motion";
import { Mail, Headphones, Radio } from "lucide-react";
import podcastCover from "@/assets/podcast-cover.png";

const steps = [
  {
    icon: <Mail className="w-8 h-8" />,
    time: "11PM EST",
    timeNote: "Sun – Thu nights",
    title: "THE DAILY BRIEF",
    description:
      "The newsletter lands in your inbox with the top AI news, AGI progress updates, and the 3 stories Frank & Ronnie will debate tomorrow morning.",
    cta: { label: "SUBSCRIBE", href: "#newsletter" },
    accent: "primary" as const,
    image: null,
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    time: "11PM EST",
    timeNote: "Sun – Thu nights",
    title: "PRE-SHOW PODCAST",
    description:
      "Prefer to listen? The same intel drops as a Spotify audio episode — a quick recap of the day's AI headlines and a preview of tomorrow's debate topics.",
    cta: { label: "LISTEN ON SPOTIFY", href: "https://open.spotify.com/show/3MoVHf52PD2gUs0BskQFeo?si=zQu9bEh6Q_GVUJLk-Yh3WQ", external: true },
    accent: "secondary" as const,
    image: podcastCover,
  },
  {
    icon: <Radio className="w-8 h-8" />,
    time: "9AM EST",
    timeNote: "Mon – Fri mornings",
    title: "THE LIVE SHOW",
    description:
      "Frank & Ronnie go live on YouTube, X, and Twitch to break down the stories, share their takes, and open the floor — you can join the debate.",
    cta: { label: "WATCH LIVE", href: "https://youtube.com", external: true },
    accent: "primary" as const,
    image: null,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-card/50 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            HOW IT <span className="text-secondary text-glow-red">WORKS</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A three-step daily cycle that keeps you ahead of the AI revolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Connecting arrows between cards on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[33.33%] w-[2px] h-0 border-t-2 border-dashed border-primary/30 -translate-y-1/2" style={{ width: 'calc(33.33% - 2rem)', left: 'calc(33.33% - 0.5rem)', top: '50%', height: 0, borderTop: '2px dashed', borderColor: 'hsl(var(--primary) / 0.3)' }} />
          <div className="hidden md:block absolute" style={{ width: 'calc(33.33% - 2rem)', left: 'calc(66.66% - 0.5rem)', top: '50%', height: 0, borderTop: '2px dashed', borderColor: 'hsl(var(--primary) / 0.3)' }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              {/* Step number */}
              <div className="absolute -top-3 left-6 bg-background px-2">
                <span className={`font-display text-xs tracking-widest font-bold ${step.accent === 'primary' ? 'text-primary' : 'text-secondary'}`}>
                  STEP {i + 1}
                </span>
              </div>

              {step.image ? (
                <div className="mb-4 flex items-center gap-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-24 h-24 rounded-lg object-cover shadow-lg"
                  />
                  <div>
                    <div className={`${step.accent === 'primary' ? 'text-primary' : 'text-secondary'} mb-1`}>{step.icon}</div>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-display ${step.accent === 'primary' ? 'text-primary' : 'text-secondary'} text-xs tracking-widest font-semibold`}>
                        {step.time}
                      </span>
                      <span className="text-muted-foreground text-xs">{step.timeNote}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <div className={`${step.accent === 'primary' ? 'text-primary' : 'text-secondary'} mb-3`}>{step.icon}</div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={`font-display ${step.accent === 'primary' ? 'text-primary' : 'text-secondary'} text-xs tracking-widest font-semibold`}>
                      {step.time}
                    </span>
                    <span className="text-muted-foreground text-xs">{step.timeNote}</span>
                  </div>
                </>
              )}

              <h3 className="font-display text-lg font-bold tracking-wider mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{step.description}</p>
              <a
                href={step.cta.href}
                {...(step.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`inline-block font-display text-xs font-semibold tracking-wider ${step.accent === 'primary' ? 'text-primary' : 'text-secondary'} hover:underline`}
              >
                {step.cta.label} →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
