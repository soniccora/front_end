import * as React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MailCheck } from "lucide-react";

export function Newsletter() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);

    try {
      const response = await fetch("https://formspree.io/f/mjgjqpan", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Oops! There was a problem subscribing.");
      }
    } catch (error) {
      alert("Oops! There was a problem subscribing.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden py-24 bg-transparent">
      <div className="pointer-events-none absolute inset-0 radial-cyan opacity-20" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center p-8 rounded-3xl border border-primary/20 bg-primary/5 backdrop-blur-sm"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-primary mb-6">
              <MailCheck size={32} />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">You're on the list!</h3>
            <p className="text-muted-foreground">Keep an eye on your inbox for the latest updates from Soniccora.</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-primary mb-6">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              STAY TUNED
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-5xl text-foreground">
              Subscribe to the <span className="text-primary text-glow-cyan">Newsletter</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Get early access to new AI voice models, developer updates, and exclusive community content.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                name="email"
                required
                placeholder="developer@company.com"
                className="flex-1 rounded-xl border border-border bg-surface/50 px-5 py-4 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary placeholder:text-muted-foreground/50 transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_24px_rgba(0,229,255,0.4)] disabled:opacity-50"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                {!isSubmitting && <Send size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />}
              </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground/60">
              We respect your privacy. No spam, unsubscribe at any time.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
