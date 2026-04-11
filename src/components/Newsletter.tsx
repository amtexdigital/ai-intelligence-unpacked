import { motion } from "framer-motion";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("fields[email]", email);
      formData.append("ml-submit", "1");
      formData.append("anticsrf", "true");

      await fetch(
        "https://assets.mailerlite.com/jsonp/1069438/forms/141820806498498498/subscribe",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="newsletter" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
            GET THE <span className="text-secondary">DAILY BRIEF</span>
          </h2>
          <p className="text-muted-foreground text-xl font-body mb-4">
            Every Sunday through Thursday at 11PM EST — the top AI stories, AGI progress, and the 3 debate topics for tomorrow's live show.
          </p>
          <p className="text-muted-foreground text-lg font-body mb-10">
            Read it the night before, then join Frank & Ronnie live at 9AM to hear the debate.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 border-4 border-primary bg-primary/10 pixel-shadow-pink"
            >
              <p className="font-display text-primary text-sm font-semibold">YOU'RE IN.</p>
              <p className="text-muted-foreground mt-2 font-body text-xl">Check your inbox tonight for the next intelligence briefing.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-4 bg-card border-4 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors font-body text-xl"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 bg-primary text-primary-foreground font-display text-[10px] tracking-wider pixel-shadow-pink hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all disabled:opacity-70"
              >
                {loading ? "SENDING..." : "SUBSCRIBE"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
