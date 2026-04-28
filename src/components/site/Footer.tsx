import * as React from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Github, Twitter, Linkedin, Send } from "lucide-react";

type FooterLink = { label: string; to: string };

const cols: { title: string; items: FooterLink[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Changelog", to: "/changelog" },
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "API Reference", to: "/api-reference" },
      { label: "Documentation", to: "/docs" },
      { label: "SDKs", to: "/sdks" },
      { label: "Status", to: "/status" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", to: "/about" },
      { label: "Blog", to: "/blog" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms" },
      { label: "Security", to: "/security" },
    ],
  },
];

function NewsletterForm() {
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
      if (response.ok) setIsSubmitted(true);
    } catch (error) {}
    finally { setIsSubmitting(false); }
  };

  return (
    <div className="col-span-2 md:col-span-1">
      <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
        Stay Updated
      </p>
      <p className="mt-4 text-sm text-muted-foreground">
        Get the latest audio engine updates and developer news.
      </p>
      {isSubmitted ? (
        <p className="mt-4 text-sm text-primary font-medium">Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2">
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full rounded-md border border-border bg-surface/50 px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all"
          >
            {isSubmitting ? "..." : "Subscribe"}
            <Send size={14} />
          </button>
        </form>
      )}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 gap-8 sm:gap-10 md:grid-cols-6 md:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Soniccora Logo" className="h-12 w-auto object-contain" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              AI-powered engine for scalable, programmable audio systems.
            </p>
          </div>

          {/* Nav columns */}
          {cols.map((c) => (
            <div key={c.title} className="min-w-0">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                {c.title.toUpperCase()}
              </p>
              <ul className="mt-4 space-y-2">
                {c.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      activeProps={{ className: "!text-primary font-medium" }}
                      className="block break-words text-sm text-foreground/80 transition-colors hover:text-primary"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <NewsletterForm />
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © 2026 Soniccora Technologies Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
