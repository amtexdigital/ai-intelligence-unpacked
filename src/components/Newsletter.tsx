import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Newsletter = () => {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load MailerLite universal script
    const script = document.createElement("script");
    script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v1f25ee4b05da360e12e228ef42c7307c";
    script.async = true;
    document.body.appendChild(script);

    // Initialize MailerLite
    (window as any).MailerLiteObject = "ml";
    const ml = (window as any).ml || function (...args: any[]) {
      ((window as any).ml.q = (window as any).ml.q || []).push(args);
    };
    (window as any).ml = ml;
    ml("account", "1069438");

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Watch for MailerLite success state
  useEffect(() => {
    if (!formRef.current) return;
    const observer = new MutationObserver(() => {
      const successEl = formRef.current?.querySelector(".ml-form-successBody");
      if (successEl && (successEl as HTMLElement).style.display !== "none") {
        setSubmitted(true);
      }
    });
    observer.observe(formRef.current, { subtree: true, childList: true, attributes: true });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="newsletter" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-primary/3 to-background" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            GET THE <span className="text-primary text-glow-cyan">DAILY BRIEF</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Every Sunday through Thursday at 11PM EST — the top AI stories, AGI progress, and the 3 debate topics for tomorrow's live show.
          </p>
          <p className="text-muted-foreground text-sm mb-10">
            Read it the night before, then join Frank & Ronnie live at 9AM to hear the debate.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-6 rounded-xl border border-primary/40 bg-primary/5"
            >
              <p className="font-display text-primary text-lg font-semibold">YOU'RE IN.</p>
              <p className="text-muted-foreground mt-2">Check your inbox tonight for the next intelligence briefing.</p>
            </motion.div>
          ) : (
            <div ref={formRef} className="max-w-md mx-auto mailerlite-form-wrapper">
              <div
                id="mlb2-38999005"
                className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-38999005"
              >
                <div className="ml-form-align-center">
                  <div className="ml-form-embedWrapper embedForm">
                    <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                      <form
                        className="ml-block-form"
                        action="https://assets.mailerlite.com/jsonp/1069438/forms/141820806498498498/subscribe"
                        data-code=""
                        method="post"
                        target="_blank"
                      >
                        <div className="ml-form-formContent">
                          <div className="ml-form-fieldRow ml-last-item">
                            <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required">
                              <input
                                aria-label="email"
                                aria-required="true"
                                type="email"
                                name="fields[email]"
                                placeholder="your@email.com"
                                autoComplete="email"
                                required
                                className="flex-1 w-full px-5 py-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors font-body"
                                style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--foreground))', borderColor: 'hsl(var(--border))' }}
                              />
                            </div>
                          </div>
                        </div>
                        <input type="hidden" name="ml-submit" value="1" />
                        <div className="ml-form-embedSubmit">
                          <button
                            type="submit"
                            className="mt-3 w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:brightness-110 transition-all"
                          >
                            SUBSCRIBE
                          </button>
                          <button
                            disabled
                            style={{ display: "none" }}
                            type="button"
                            className="loading mt-3 w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider"
                          >
                            <div className="ml-form-embedSubmitLoad" />
                            <span className="sr-only">Loading...</span>
                          </button>
                        </div>
                        <input type="hidden" name="anticsrf" value="true" />
                      </form>
                    </div>
                    <div className="ml-form-successBody row-success" style={{ display: "none" }}>
                      <div className="ml-form-successContent">
                        <h4>Thank you!</h4>
                        <p>You have successfully joined our subscriber list.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
