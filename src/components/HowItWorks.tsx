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
    color: "primary" as const,
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
    color: "secondary" as const,
    image: podcastCover,
  },
  {
    icon: <Radio className="w-8 h-8" />,
    time: "9AM EST",
    timeNote: "Mon – Fri mornings",
    title: "THE LIVE SHOW",
    description:
      "Frank & Ronnie go live on YouTube, X, and Twitch to break down the stories, share their takes, and open the floor — you can join the debate.",
    cta: { label: "WATCH LIVE", href: "https://www.youtube.com/@DetectingIntelligence", external: true },
    color: "primary" as const,
    image: null,
  },
];

const colorMap = {
  primary: {
    text: "text-primary",
    border: "pixel-border-pink",
    bg: "bg-primary",
  },
  secondary: {
    text: "text-secondary",
    border: "pixel-border-blue",
    bg: "bg-secondary",
  },
};

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
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            HOW IT <span className="text-primary">WORKS</span>
          </h2>
          <p className="text-muted-foreground text-xl font-body max-w-2xl mx-auto">
            A three-step daily cycle that keeps you ahead of the AI revolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {/* Pixel connecting arrows on desktop */}
          <div className="hidden md:flex absolute top-1/2 left-[33.33%] -translate-y-1/2 items-center" style={{ width: 'calc(33.33% - 3rem)', marginLeft: '1.5rem' }}>
            <div className="flex-1 h-1 bg-accent/30" />
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-accent/30" />
          </div>
          <div className="hidden md:flex absolute top-1/2 left-[66.66%] -translate-y-1/2 items-center" style={{ width: 'calc(33.33% - 3rem)', marginLeft: '1.5rem' }}>
            <div className="flex-1 h-1 bg-accent/30" />
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-accent/30" />
          </div>

          {steps.map((step, i) => {
            const colors = colorMap[step.color];
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative p-6 bg-background border-4 border-border hover:border-primary/60 transition-all duration-300 flex flex-col pixel-shadow`}
              >
                {/* Step number pixel badge */}
                <div className={`absolute -top-4 left-4 ${colors.bg} px-3 py-1`}>
                  <span className="font-display text-[8px] text-background tracking-widest font-bold">
                    STEP {i + 1}
                  </span>
                </div>

                {step.image ? (
                  <div className="mb-4 flex items-center gap-4 mt-2">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-24 h-24 object-cover border-4 border-border"
                    />
                    <div>
                      <div className={`${colors.text} mb-1`}>{step.icon}</div>
                      <div className="flex items-baseline gap-2">
                        <span className={`font-display ${colors.text} text-[8px] tracking-widest font-semibold`}>
                          {step.time}
                        </span>
                        <span className="text-muted-foreground text-sm font-body">{step.timeNote}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-2">
                    <div className={`${colors.text} mb-3`}>{step.icon}</div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className={`font-display ${colors.text} text-[8px] tracking-widest font-semibold`}>
                        {step.time}
                      </span>
                      <span className="text-muted-foreground text-sm font-body">{step.timeNote}</span>
                    </div>
                  </div>
                )}

                <h3 className="font-display text-xs font-bold tracking-wider mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-lg font-body leading-relaxed mb-4 flex-1">{step.description}</p>
                <a
                  href={step.cta.href}
                  {...(step.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`inline-block font-display text-[8px] font-semibold tracking-wider ${colors.text} hover:underline`}
                >
                  {step.cta.label} →
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
