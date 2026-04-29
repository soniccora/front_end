import * as React from "react";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Facebook, Youtube, Twitter, Linkedin, Send } from "lucide-react";

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
            <a
              href="https://www.facebook.com//soniccora/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Facebook size={16} />
            </a>
            <a
              href="https://www.youtube.com/@Soniccora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Youtube size={16} />
            </a>
            <a
              href="http://pinterest.com/Soniccora_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.181-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281.082.099.094.188.069.288-.076.312-.246 1.002-.279 1.139-.042.174-.145.213-.327.129-1.222-.569-1.986-2.355-1.986-3.791 0-3.08 2.239-5.908 6.452-5.908 3.391 0 6.027 2.417 6.027 5.642 0 3.37-2.124 6.084-5.074 6.084-1.026 0-1.99-.533-2.318-1.162l-.631 2.404c-.228.873-.846 1.964-1.26 2.63 1.028.318 2.115.488 3.235.488 5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>
            </a>
            <a
              href="https://x.com/Soniccora_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://www.linkedin.com/company/soniccora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
