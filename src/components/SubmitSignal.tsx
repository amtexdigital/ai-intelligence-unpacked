import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { submissionTypeOptions, type SubmissionType } from "@/lib/signals";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  submitter_name: z.string().trim().max(100).optional().or(z.literal("")),
  submitter_email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(255)
    .optional()
    .or(z.literal("")),
  submission_type: z.enum([
    "uap_story",
    "ai_breakthrough",
    "cognition_research",
    "weird_observation",
    "host_question",
  ]),
  title: z.string().trim().min(1, "Required").max(200),
  content: z.string().trim().min(10, "Tell us a little more").max(5000),
  source_url: z.string().trim().url("Must be a valid URL").max(500).optional().or(z.literal("")),
});

const SubmitSignal = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    submitter_name: "",
    submitter_email: "",
    submission_type: "ai_breakthrough" as SubmissionType,
    title: "",
    content: "",
    source_url: "",
  });

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Check your submission",
        description: parsed.error.issues[0]?.message ?? "Invalid input",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("signal_submissions").insert({
      submitter_name: form.submitter_name || null,
      submitter_email: form.submitter_email || null,
      submission_type: form.submission_type,
      title: form.title.trim(),
      content: form.content.trim(),
      source_url: form.source_url || null,
    });
    setSubmitting(false);
    if (error) {
      toast({ title: "Could not submit", description: error.message, variant: "destructive" });
      return;
    }
    setDone(true);
  };

  return (
    <section id="submit" className="py-24 bg-card/30 relative border-y border-border/40">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-10">
            <h2 className="font-display text-xl md:text-2xl font-bold mb-4">
              SUBMIT A <span className="text-accent">SIGNAL</span>
            </h2>
            <p className="text-muted-foreground text-xl font-body">
              Saw something weird? Caught a breakthrough? Got a question for the hosts? Send it our way.
            </p>
          </div>

          {done ? (
            <div className="p-8 border-2 border-accent/60 bg-accent/10 text-center neon-shadow-purple">
              <p className="font-display text-accent text-sm mb-2">SIGNAL RECEIVED.</p>
              <p className="text-muted-foreground font-body text-xl">
                Thanks — we review every signal before the next live show.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your name (optional)"
                  value={form.submitter_name}
                  onChange={update("submitter_name")}
                  maxLength={100}
                  className="px-4 py-3 bg-card border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary font-body text-lg"
                />
                <input
                  type="email"
                  placeholder="Email (optional)"
                  value={form.submitter_email}
                  onChange={update("submitter_email")}
                  maxLength={255}
                  className="px-4 py-3 bg-card border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary font-body text-lg"
                />
              </div>
              <select
                value={form.submission_type}
                onChange={update("submission_type")}
                className="w-full px-4 py-3 bg-card border-2 border-border text-foreground focus:outline-none focus:border-secondary font-body text-lg"
              >
                {submissionTypeOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <input
                type="text"
                placeholder="Headline / title"
                value={form.title}
                onChange={update("title")}
                required
                maxLength={200}
                className="w-full px-4 py-3 bg-card border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary font-body text-lg"
              />
              <input
                type="url"
                placeholder="Source URL (optional)"
                value={form.source_url}
                onChange={update("source_url")}
                maxLength={500}
                className="w-full px-4 py-3 bg-card border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary font-body text-lg"
              />
              <textarea
                placeholder="What did you see? Why does it matter?"
                value={form.content}
                onChange={update("content")}
                required
                maxLength={5000}
                rows={6}
                className="w-full px-4 py-3 bg-card border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary font-body text-lg resize-none"
              />
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-4 bg-accent text-accent-foreground font-display text-[10px] tracking-wider neon-shadow-purple hover:translate-y-[-2px] transition-all disabled:opacity-60"
              >
                {submitting ? "TRANSMITTING..." : "TRANSMIT SIGNAL"}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SubmitSignal;
