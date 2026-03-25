import { motion } from "framer-motion";
import { Mail, Headphones, Radio } from "lucide-react";

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
  },
  {
    icon: <Headphones className="w-8 h-8" />,
    time: "11PM EST",
    timeNote: "Sun – Thu nights",
    title: "PRE-SHOW PODCAST",
    description:
      "Prefer to listen? The same intel drops as a Spotify audio episode — a quick recap of the day's AI headlines and a preview of tomorrow's debate topics.",
    cta: { label: "LISTEN ON SPOTIFY", href: "https://spotify.com", external: true },
    accent: "secondary" as const,
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

        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline node */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background z-10" />

                {/* Card */}
                <div className="md:w-[45%] p-6 rounded-xl border border-border bg-background hover:border-primary/30 transition-all duration-300">
                  <div className={`text-${step.accent} mb-3`}>{step.icon}</div>
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className={`font-display text-${step.accent} text-xs tracking-widest font-semibold`}>
                      {step.time}
                    </span>
                    <span className="text-muted-foreground text-xs">{step.timeNote}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold tracking-wider mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
                  <a
                    href={step.cta.href}
                    {...(step.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={`inline-block font-display text-xs font-semibold tracking-wider text-${step.accent} hover:underline`}
                  >
                    {step.cta.label} →
                  </a>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
